"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { IProduct } from "@/types/product";
import { useSiteConfig } from "@/hooks/use-site-config";
import { useCart } from "@/hooks/use-cart";
import { formatCurrency } from "@/lib/utils/format-currency";

interface ProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const config = useSiteConfig();
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const isOutOfStock = product.inventory === 0;
  const categoryName =
    typeof product.category === "object" && product.category?.name
      ? product.category.name
      : "";

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (isOutOfStock) return;
    addItem({
      productId: product._id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      image: product.images[0] || "",
      quantity: 1,
      maxQuantity: product.inventory,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link href={`/product/${product.slug}`} className="block group">
        <div className="rounded-2xl backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] overflow-hidden hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 h-full flex flex-col">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
            <Image
              src={product.images[0] || "/placeholder-product.png"}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />

            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-1.5">
              {product.isJustArrived && (
                <Badge variant="gold">New</Badge>
              )}
              {isOutOfStock && (
                <Badge variant="danger">Sold Out</Badge>
              )}
              {!isOutOfStock && product.inventory <= 3 && product.inventory > 0 && (
                <Badge variant="warning">Low Stock</Badge>
              )}
            </div>

            {/* Quick Add to Cart */}
            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <button
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isOutOfStock
                    ? "bg-white/10 text-white/40 cursor-not-allowed"
                    : added
                    ? "bg-emerald-500 text-white"
                    : "bg-white text-black hover:bg-white/90 active:scale-[0.98]"
                }`}
              >
                <AnimatePresence mode="wait">
                  {added ? (
                    <motion.span
                      key="added"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex items-center justify-center gap-1.5"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      Added
                    </motion.span>
                  ) : (
                    <motion.span
                      key="add"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                    >
                      {isOutOfStock ? "Sold Out" : "Quick Add"}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4 flex flex-col flex-1">
            {categoryName && (
              <p className="text-[11px] uppercase tracking-wider text-white/30 mb-1.5">
                {categoryName}
              </p>
            )}
            <h3 className="text-sm font-medium text-white/90 leading-snug line-clamp-2 mb-2">
              {product.name}
            </h3>
            <div className="mt-auto">
              <p className="text-lg font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
                {formatCurrency(product.price, config.currencySymbol)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
