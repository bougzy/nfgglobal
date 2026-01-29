export const dynamic = "force-dynamic";

import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/actions/product.actions";
import { getSiteConfig } from "@/lib/actions/site-config.actions";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils/format-currency";
import { DeleteProductButton } from "./delete-button";

export const metadata = {
  title: "Products",
};

export default async function ProductsPage() {
  const [products, config] = await Promise.all([
    getProducts(),
    getSiteConfig(),
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Products</h1>
          <p className="text-sm text-white/50 mt-1">
            Manage your product catalog
          </p>
        </div>
        <Link href="/admin/dashboard/products/new">
          <Button>Add Product</Button>
        </Link>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block rounded-xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left text-xs font-medium text-white/50 px-4 py-3">
                  Product
                </th>
                <th className="text-left text-xs font-medium text-white/50 px-4 py-3">
                  Category
                </th>
                <th className="text-left text-xs font-medium text-white/50 px-4 py-3">
                  Price
                </th>
                <th className="text-left text-xs font-medium text-white/50 px-4 py-3">
                  Stock
                </th>
                <th className="text-left text-xs font-medium text-white/50 px-4 py-3">
                  Status
                </th>
                <th className="text-right text-xs font-medium text-white/50 px-4 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: { _id: string; images: string[]; name: string; category: { name: string } | string; price: number; inventory: number; isActive: boolean; isJustArrived: boolean }) => (
                <tr
                  key={product._id}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/5 flex-shrink-0">
                        <Image
                          src={
                            product.images[0] || "/placeholder-product.png"
                          }
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <span className="text-sm text-white/80 truncate max-w-[200px]">
                        {product.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-white/60">
                    {typeof product.category === "object" &&
                    product.category
                      ? product.category.name
                      : "\u2014"}
                  </td>
                  <td className="px-4 py-3 text-sm text-white/80">
                    {formatCurrency(product.price, config.currencySymbol)}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={
                        product.inventory === 0
                          ? "text-red-400"
                          : product.inventory <= 5
                            ? "text-amber-400"
                            : "text-white/60"
                      }
                    >
                      {product.inventory}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1.5">
                      {product.isActive ? (
                        <Badge variant="success">Active</Badge>
                      ) : (
                        <Badge variant="danger">Inactive</Badge>
                      )}
                      {product.isJustArrived && (
                        <Badge variant="gold">New</Badge>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/dashboard/products/${product._id}/edit`}
                      >
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </Link>
                      <DeleteProductButton
                        productId={product._id}
                        productName={product.name}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card List */}
      <div className="md:hidden space-y-3">
        {products.map((product: { _id: string; images: string[]; name: string; category: { name: string } | string; price: number; inventory: number; isActive: boolean; isJustArrived: boolean }) => (
          <div
            key={product._id}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-4 space-y-3"
          >
            <div className="flex items-start gap-3">
              <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-white/5 flex-shrink-0">
                <Image
                  src={product.images[0] || "/placeholder-product.png"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-white/90 truncate">
                  {product.name}
                </h3>
                <p className="text-xs text-white/50 mt-0.5">
                  {typeof product.category === "object" && product.category
                    ? product.category.name
                    : "\u2014"}
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  {product.isActive ? (
                    <Badge variant="success">Active</Badge>
                  ) : (
                    <Badge variant="danger">Inactive</Badge>
                  )}
                  {product.isJustArrived && (
                    <Badge variant="gold">New</Badge>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-white/90">
                  {formatCurrency(product.price, config.currencySymbol)}
                </span>
                <span
                  className={`text-xs ${
                    product.inventory === 0
                      ? "text-red-400"
                      : product.inventory <= 5
                        ? "text-amber-400"
                        : "text-white/50"
                  }`}
                >
                  Stock: {product.inventory}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Link href={`/admin/dashboard/products/${product._id}/edit`}>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </Link>
                <DeleteProductButton
                  productId={product._id}
                  productName={product.name}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12 text-white/40">
          No products yet.{" "}
          <Link
            href="/admin/dashboard/products/new"
            className="text-amber-400 hover:text-amber-300"
          >
            Add your first product
          </Link>
        </div>
      )}
    </div>
  );
}
