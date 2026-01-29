"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "@/hooks/use-cart";
import { useSiteConfig } from "@/hooks/use-site-config";
import { formatCurrency } from "@/lib/utils/format-currency";
import { CartItem as CartItemType } from "@/types/cart";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const config = useSiteConfig();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex gap-4 p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10"
    >
      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-white/5">
        <Image
          src={item.image || "/placeholder-product.png"}
          alt={item.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-white/90 truncate">
          {item.name}
        </h3>
        <p className="text-sm font-bold text-amber-400 mt-1">
          {formatCurrency(item.price, config.currencySymbol)}
        </p>

        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="w-7 h-7 rounded-md bg-white/10 border border-white/10 text-white/70 flex items-center justify-center hover:bg-white/20 disabled:opacity-30 transition-all text-sm"
          >
            -
          </button>
          <span className="text-sm text-white/80 w-6 text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
            disabled={item.quantity >= item.maxQuantity}
            className="w-7 h-7 rounded-md bg-white/10 border border-white/10 text-white/70 flex items-center justify-center hover:bg-white/20 disabled:opacity-30 transition-all text-sm"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => removeItem(item.productId)}
          className="text-white/30 hover:text-red-400 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <p className="text-sm font-semibold text-white/70">
          {formatCurrency(item.price * item.quantity, config.currencySymbol)}
        </p>
      </div>
    </motion.div>
  );
}
