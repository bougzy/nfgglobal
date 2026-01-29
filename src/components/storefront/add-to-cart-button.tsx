"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { IProduct } from "@/types/product";

interface AddToCartButtonProps {
  product: IProduct;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const isOutOfStock = product.inventory === 0;

  function handleAddToCart() {
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
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="relative">
      <Button
        onClick={handleAddToCart}
        disabled={isOutOfStock}
        size="lg"
        className="w-full"
      >
        {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </Button>

      <AnimatePresence>
        {added && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm text-emerald-400 font-medium whitespace-nowrap"
          >
            Added to cart!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
