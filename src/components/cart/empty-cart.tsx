import Link from "next/link";
import { Button } from "@/components/ui/button";

export function EmptyCart() {
  return (
    <div className="text-center py-16">
      <svg
        className="w-20 h-20 mx-auto text-white/20 mb-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      <h2 className="text-xl font-semibold text-white/80 mb-2">
        Your cart is empty
      </h2>
      <p className="text-white/40 mb-8">
        Browse our collection and add items to your cart.
      </p>
      <Link href="/">
        <Button>Continue Shopping</Button>
      </Link>
    </div>
  );
}
