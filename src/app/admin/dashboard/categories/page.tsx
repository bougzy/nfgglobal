export const dynamic = "force-dynamic";

import { getCategories } from "@/lib/actions/category.actions";
import { CategoryManager } from "@/components/admin/category-form";

export const metadata = {
  title: "Categories",
};

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Categories</h1>
        <p className="text-sm text-white/50 mt-1">
          Manage product categories
        </p>
      </div>

      <CategoryManager categories={categories} />
    </div>
  );
}
