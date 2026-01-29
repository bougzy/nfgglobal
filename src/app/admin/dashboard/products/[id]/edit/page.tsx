export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { getProductById } from "@/lib/actions/product.actions";
import { getCategories } from "@/lib/actions/category.actions";
import { ProductForm } from "@/components/admin/product-form";

export const metadata = {
  title: "Edit Product",
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditProductPage({ params }: Props) {
  const { id } = await params;
  const [product, categories] = await Promise.all([
    getProductById(id),
    getCategories(),
  ]);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Edit Product</h1>
        <p className="text-sm text-white/50 mt-1">
          Update product details
        </p>
      </div>

      <ProductForm product={product} categories={categories} />
    </div>
  );
}
