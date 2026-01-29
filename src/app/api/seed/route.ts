import { NextResponse } from "next/server";
import { seedDatabase } from "@/lib/db/seed";

export async function POST() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { error: "Seeding is disabled in production" },
      { status: 403 }
    );
  }

  try {
    const result = await seedDatabase();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Failed to seed database" },
      { status: 500 }
    );
  }
}
