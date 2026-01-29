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

  const filteredProducts = useMemo(() => {
    if (!activeCategory) return products;
    return products.filter((p) => {
      const catId =
        typeof p.category === "string" ? p.category : p.category?._id;
      return catId === activeCategory;
    });
  }, [products, activeCategory]);

  return (
    <section id="products" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
            Our Collection
          </span>
        </h2>

        <div className="mb-8">
          <CategoryGrid
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory || "all"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <p className="text-center text-white/40 mt-12">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
