"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { IProduct } from "@/types/product";
import { useSiteConfig } from "@/hooks/use-site-config";
import { formatCurrency } from "@/lib/utils/format-currency";

interface ProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const config = useSiteConfig();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/product/${product.slug}`}>
        <div className="group rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
          <div className="relative aspect-square overflow-hidden bg-white/5">
            <Image
              src={product.images[0] || "/placeholder-product.png"}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.isJustArrived && (
                <Badge variant="gold">Just Arrived</Badge>
              )}
              {product.inventory === 0 && (
                <Badge variant="danger">Out of Stock</Badge>
              )}
              {product.inventory === 1 && (
                <Badge variant="warning">Only 1 Left</Badge>
              )}
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-sm font-medium text-white/90 truncate">
              {product.name}
            </h3>
            <p className="mt-1 text-lg font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
              {formatCurrency(product.price, config.currencySymbol)}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
