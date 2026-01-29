"use server";

import { cookies } from "next/headers";
import { dbConnect } from "@/lib/db/connection";
import { Admin } from "@/lib/db/models/admin.model";
import { hashPassword, verifyPassword } from "@/lib/auth/password";
import { verifyToken } from "@/lib/auth/jwt";

export async function changeAdminPassword(data: {
  currentPassword: string;
  newPassword: string;
}) {
  await dbConnect();

  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) {
    return { success: false, error: "Not authenticated" };
  }

  try {
    const payload = await verifyToken(token);
    const admin = await Admin.findById(payload.sub);

    if (!admin) {
      return { success: false, error: "Admin not found" };
    }

    const isValid = await verifyPassword(
      data.currentPassword,
      admin.passwordHash
    );
    if (!isValid) {
      return { success: false, error: "Current password is incorrect" };
    }

    admin.passwordHash = await hashPassword(data.newPassword);
    await admin.save();

    return { success: true };
  } catch {
    return { success: false, error: "Authentication error" };
  }
}

export async function getAdminStats() {
  await dbConnect();

  const { Product } = await import("@/lib/db/models/product.model");
  const { Category } = await import("@/lib/db/models/category.model");

  const [totalProducts, activeProducts, totalCategories, inventoryResult] =
    await Promise.all([
      Product.countDocuments(),
      Product.countDocuments({ isActive: true }),
      Category.countDocuments(),
      Product.aggregate([
        { $group: { _id: null, totalValue: { $sum: { $multiply: ["$price", "$inventory"] } } } },
      ]),
    ]);

  const totalInventoryValue = inventoryResult[0]?.totalValue || 0;

  return {
    totalProducts,
    activeProducts,
    totalCategories,
    totalInventoryValue,
  };
}
