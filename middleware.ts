import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth/jwt";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  try {
    await verifyToken(token);
    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(new URL("/admin", request.url));
    response.cookies.delete("admin_token");
    return response;
  }
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
