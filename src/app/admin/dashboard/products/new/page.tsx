export const dynamic = "force-dynamic";

import { getCategories } from "@/lib/actions/category.actions";
import { ProductForm } from "@/components/admin/product-form";

export const metadata = {
  title: "New Product",
};

export default async function NewProductPage() {
  const categories = await getCategories();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">New Product</h1>
        <p className="text-sm text-white/50 mt-1">
          Add a new product to your catalog
        </p>
      </div>

      <ProductForm categories={categories} />
    </div>
  );
}
