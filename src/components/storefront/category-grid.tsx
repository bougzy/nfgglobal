"use client";

import { motion } from "framer-motion";
import { ICategory } from "@/types/category";

interface CategoryGridProps {
  categories: ICategory[];
  activeCategory: string | null;
  onSelectCategory: (slug: string | null) => void;
}

export function CategoryGrid({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryGridProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          activeCategory === null
            ? "bg-gradient-to-r from-amber-500 to-yellow-600 text-black"
            : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10"
        }`}
      >
        All
      </motion.button>
      {categories.map((cat) => (
        <motion.button
          key={cat._id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelectCategory(cat._id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCategory === cat._id
              ? "bg-gradient-to-r from-amber-500 to-yellow-600 text-black"
              : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10"
          }`}
        >
          {cat.name}
        </motion.button>
      ))}
    </div>
  );
}
