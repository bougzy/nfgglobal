export const dynamic = "force-dynamic";

import { getProducts } from "@/lib/actions/product.actions";
import { getCategories } from "@/lib/actions/category.actions";
import { getSiteConfig } from "@/lib/actions/site-config.actions";
import { FALLBACK_PRODUCTS, FALLBACK_CATEGORIES } from "@/lib/fallback-data";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/storefront/hero-section";
import { ProductGrid } from "@/components/storefront/product-grid";
import { WhatsAppFAB } from "@/components/storefront/whatsapp-fab";

export default async function HomePage() {
  let products, categories, config;

  try {
    [products, categories, config] = await Promise.all([
      getProducts({ isActive: true }),
      getCategories(true),
      getSiteConfig(),
    ]);
  } catch {
    products = [];
    categories = [];
    config = {
      heroTitle: "Luxury & Style, Delivered",
      heroSubtitle:
        "Discover premium jewelry, fashion, and gifts. Shop now and checkout via WhatsApp.",
    };
  }

  // Use fallback data when DB is unavailable or returns no products
  const displayProducts = products.length > 0 ? products : FALLBACK_PRODUCTS;
  const displayCategories = categories.length > 0 ? categories : FALLBACK_CATEGORIES;

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection
          title={config.heroTitle || "Luxury & Style, Delivered"}
          subtitle={
            config.heroSubtitle ||
            "Discover premium jewelry, fashion, and gifts. Shop now and checkout via WhatsApp."
          }
        />
        <ProductGrid products={displayProducts} categories={displayCategories} />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
