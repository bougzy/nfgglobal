"use client";

import { AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartItem } from "@/components/cart/cart-item";
import { CartSummary } from "@/components/cart/cart-summary";
import { EmptyCart } from "@/components/cart/empty-cart";
import { useCart } from "@/hooks/use-cart";

export default function CartPage() {
  const { state, totalItems } = useCart();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Shopping Cart
          </h1>

          {!state.isHydrated ? (
            <div className="animate-pulse space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-24 rounded-xl bg-white/5 border border-white/10"
                />
              ))}
            </div>
          ) : totalItems === 0 ? (
            <EmptyCart />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-3">
                <AnimatePresence>
                  {state.items.map((item) => (
                    <CartItem key={item.productId} item={item} />
                  ))}
                </AnimatePresence>
              </div>
              <div>
                <div className="lg:sticky lg:top-24">
                  <CartSummary />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
