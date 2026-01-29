"use server";

import { revalidatePath } from "next/cache";
import { dbConnect } from "@/lib/db/connection";
import { Product } from "@/lib/db/models/product.model";
import { productSchema } from "@/lib/utils/validators";
import { slugify } from "@/lib/utils/slugify";

export async function getProducts(filters?: {
  category?: string;
  isActive?: boolean;
  isJustArrived?: boolean;
}) {
  await dbConnect();

  const query: Record<string, unknown> = {};
  if (filters?.category) query.category = filters.category;
  if (filters?.isActive !== undefined) query.isActive = filters.isActive;
  if (filters?.isJustArrived !== undefined)
    query.isJustArrived = filters.isJustArrived;

  const products = await Product.find(query)
    .populate("category", "name slug")
    .sort({ createdAt: -1 })
    .lean();

  return JSON.parse(JSON.stringify(products));
}

export async function getProductBySlug(slug: string) {
  await dbConnect();

  const product = await Product.findOne({ slug, isActive: true })
    .populate("category", "name slug")
    .lean();

  if (!product) return null;
  return JSON.parse(JSON.stringify(product));
}

export async function getProductById(id: string) {
  await dbConnect();

  const product = await Product.findById(id)
    .populate("category", "name slug")
    .lean();

  if (!product) return null;
  return JSON.parse(JSON.stringify(product));
}

export async function createProduct(data: {
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  inventory: number;
  isJustArrived: boolean;
  isActive: boolean;
}) {
  await dbConnect();

  const validated = productSchema.parse(data);
  const slug = slugify(validated.name);

  // Check for duplicate slug
  const existing = await Product.findOne({ slug });
  const finalSlug = existing ? `${slug}-${Date.now()}` : slug;

  const product = await Product.create({ ...validated, slug: finalSlug });

  revalidatePath("/");
  revalidatePath("/admin/dashboard/products");

  return { success: true, product: JSON.parse(JSON.stringify(product)) };
}

export async function updateProduct(
  id: string,
  data: {
    name: string;
    description: string;
    price: number;
    images: string[];
    category: string;
    inventory: number;
    isJustArrived: boolean;
    isActive: boolean;
  }
) {
  await dbConnect();

  const validated = productSchema.parse(data);
  const slug = slugify(validated.name);

  // Check for duplicate slug (excluding current product)
  const existing = await Product.findOne({ slug, _id: { $ne: id } });
  const finalSlug = existing ? `${slug}-${Date.now()}` : slug;

  const product = await Product.findByIdAndUpdate(
    id,
    { ...validated, slug: finalSlug },
    { new: true }
  );

  if (!product) {
    return { success: false, error: "Product not found" };
  }

  revalidatePath("/");
  revalidatePath(`/product/${finalSlug}`);
  revalidatePath("/admin/dashboard/products");

  return { success: true, product: JSON.parse(JSON.stringify(product)) };
}

export async function deleteProduct(id: string) {
  await dbConnect();

  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return { success: false, error: "Product not found" };
  }

  revalidatePath("/");
  revalidatePath("/admin/dashboard/products");

  return { success: true };
}

export async function getAllSlugs() {
  await dbConnect();

  const products = await Product.find({ isActive: true })
    .select("slug")
    .lean();

  return products.map((p) => ({ slug: p.slug }));
}
