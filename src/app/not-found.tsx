import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-white/60 mb-8">Page not found</p>
        <Link href="/">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    </div>
  );
}
