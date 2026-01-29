export const dynamic = "force-dynamic";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getAllSlugs } from "@/lib/actions/product.actions";
import { getSiteConfig } from "@/lib/actions/site-config.actions";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AddToCartButton } from "@/components/storefront/add-to-cart-button";
import { WhatsAppFAB } from "@/components/storefront/whatsapp-fab";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils/format-currency";
import { IProduct } from "@/types/product";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    return await getAllSlugs();
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let product: IProduct | null = null;
  let config;

  try {
    [product, config] = await Promise.all([
      getProductBySlug(slug),
      getSiteConfig(),
    ]);
  } catch {
    config = { currencySymbol: "₦", storeName: "NFG Global" };
  }

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images[0] ? [{ url: product.images[0] }] : [],
      type: "website",
      siteName: config.storeName,
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: product.images[0] ? [product.images[0]] : [],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  let product: IProduct | null = null;
  let config;

  try {
    [product, config] = await Promise.all([
      getProductBySlug(slug),
      getSiteConfig(),
    ]);
  } catch {
    config = { currencySymbol: "₦" };
    product = null;
  }

  if (!product) {
    notFound();
  }

  const categoryName =
    typeof product.category === "object" && product.category
      ? product.category.name
      : "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: config.currencyCode || "NGN",
      availability:
        product.inventory > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
    },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="mb-6">
            <Link
              href="/"
              className="text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              &larr; Back to Shop
            </Link>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <Image
                  src={product.images[0] || "/placeholder-product.png"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.slice(1).map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-square rounded-lg overflow-hidden bg-white/5 border border-white/10"
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${i + 2}`}
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                {categoryName && (
                  <p className="text-sm text-amber-400/80 mb-2">
                    {categoryName}
                  </p>
                )}
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                  {product.name}
                </h1>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gradient">
                  {formatCurrency(product.price, config.currencySymbol)}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.isJustArrived && (
                  <Badge variant="gold">Just Arrived</Badge>
                )}
                {product.inventory === 0 && (
                  <Badge variant="danger">Out of Stock</Badge>
                )}
                {product.inventory === 1 && (
                  <Badge variant="warning">Only 1 Remaining</Badge>
                )}
                {product.inventory > 1 && (
                  <Badge variant="success">In Stock</Badge>
                )}
              </div>

              <p className="text-white/60 leading-relaxed">
                {product.description}
              </p>

              <div className="pt-4">
                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
