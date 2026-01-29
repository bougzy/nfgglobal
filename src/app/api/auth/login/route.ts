import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/db/connection";
import { Admin } from "@/lib/db/models/admin.model";
import { verifyPassword } from "@/lib/auth/password";
import { signToken } from "@/lib/auth/jwt";
import { checkRateLimit } from "@/lib/auth/rate-limit";
import { loginSchema } from "@/lib/utils/validators";

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  const { allowed, retryAfterMs } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      {
        error: `Too many login attempts. Try again in ${Math.ceil(retryAfterMs / 60000)} minutes.`,
      },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid credentials format" },
        { status: 400 }
      );
    }

    await dbConnect();

    const admin = await Admin.findOne({ username: parsed.data.username });
    if (!admin) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }

    const isValid = await verifyPassword(
      parsed.data.password,
      admin.passwordHash
    );
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }

    const token = await signToken(admin._id.toString());

    const response = NextResponse.json({ success: true });
    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 86400,
      path: "/",
    });

    return response;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Login error:", message);
    return NextResponse.json(
      {
        error:
          message.includes("ENOTFOUND") || message.includes("connect")
            ? "Database connection failed. Please try again."
            : "An error occurred during login",
      },
      { status: 500 }
    );
  }
}
