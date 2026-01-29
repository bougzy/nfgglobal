"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IProduct } from "@/types/product";
import { ICategory } from "@/types/category";
import { ProductCard } from "./product-card";
import { CategoryGrid } from "./category-grid";

interface ProductGridProps {
  products: IProduct[];
  categories: ICategory[];
}

export function ProductGrid({ products, categories }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const justArrived = useMemo(
    () => products.filter((p) => p.isJustArrived),
    [products]
  );

  const filteredProducts = useMemo(() => {
    if (!activeCategory) return products;
    return products.filter((p) => {
      const catId =
        typeof p.category === "string" ? p.category : p.category?._id;
      return catId === activeCategory;
    });
  }, [products, activeCategory]);

  if (products.length === 0) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/40 text-lg">
            No products available yet. Check back soon!
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Just Arrived Section */}
      {justArrived.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                    Just Arrived
                  </span>
                </h2>
                <p className="text-sm text-white/40 mt-1">
                  Fresh additions to our collection
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-white/30 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                New arrivals
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {justArrived.slice(0, 5).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Divider */}
      {justArrived.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-white/[0.06]" />
        </div>
      )}

      {/* Full Collection */}
      <section id="products" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold">
              <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                Our Collection
              </span>
            </h2>
            <p className="text-sm text-white/40 mt-2">
              {products.length} premium products across {categories.length} categories
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-10">
            <CategoryGrid
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>

          {/* Product Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory || "all"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <p className="text-center text-white/40 mt-12 text-sm">
              No products found in this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
