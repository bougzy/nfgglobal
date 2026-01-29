"use server";

import { revalidatePath } from "next/cache";
import { dbConnect } from "@/lib/db/connection";
import { Category } from "@/lib/db/models/category.model";
import { Product } from "@/lib/db/models/product.model";
import { categorySchema } from "@/lib/utils/validators";
import { slugify } from "@/lib/utils/slugify";

export async function getCategories(activeOnly = false) {
  await dbConnect();

  const query = activeOnly ? { isActive: true } : {};
  const categories = await Category.find(query).sort({ order: 1 }).lean();

  return JSON.parse(JSON.stringify(categories));
}

export async function createCategory(data: {
  name: string;
  order: number;
  isActive: boolean;
}) {
  await dbConnect();

  const validated = categorySchema.parse(data);
  const slug = slugify(validated.name);

  const existing = await Category.findOne({ slug });
  if (existing) {
    return { success: false, error: "A category with this name already exists" };
  }

  const category = await Category.create({ ...validated, slug });

  revalidatePath("/");
  revalidatePath("/admin/dashboard/categories");

  return { success: true, category: JSON.parse(JSON.stringify(category)) };
}

export async function updateCategory(
  id: string,
  data: { name: string; order: number; isActive: boolean }
) {
  await dbConnect();

  const validated = categorySchema.parse(data);
  const slug = slugify(validated.name);

  const existing = await Category.findOne({ slug, _id: { $ne: id } });
  if (existing) {
    return { success: false, error: "A category with this name already exists" };
  }

  const category = await Category.findByIdAndUpdate(
    id,
    { ...validated, slug },
    { new: true }
  );

  if (!category) {
    return { success: false, error: "Category not found" };
  }

  revalidatePath("/");
  revalidatePath("/admin/dashboard/categories");

  return { success: true, category: JSON.parse(JSON.stringify(category)) };
}

export async function deleteCategory(id: string) {
  await dbConnect();

  const productCount = await Product.countDocuments({ category: id });
  if (productCount > 0) {
    return {
      success: false,
      error: `Cannot delete: ${productCount} product(s) are assigned to this category`,
    };
  }

  const category = await Category.findByIdAndDelete(id);
  if (!category) {
    return { success: false, error: "Category not found" };
  }

  revalidatePath("/");
  revalidatePath("/admin/dashboard/categories");

  return { success: true };
}
