import type { Metadata } from "next";
import "./globals.css";
import { SiteConfigProvider } from "@/context/site-config-context";
import { CartProvider } from "@/context/cart-context";
import { ToastProvider } from "@/components/ui/toast";
import { getSiteConfig } from "@/lib/actions/site-config.actions";

export async function generateMetadata(): Promise<Metadata> {
  let config;
  try {
    config = await getSiteConfig();
  } catch {
    config = null;
  }

  const storeName = config?.storeName || "NFG Global";

  return {
    title: {
      default: `${storeName} - Premium E-Commerce`,
      template: `%s | ${storeName}`,
    },
    description:
      "Discover premium jewelry, fashion, and gifts. Shop now and checkout via WhatsApp.",
    openGraph: {
      type: "website",
      siteName: storeName,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let config = null;
  try {
    config = await getSiteConfig();
  } catch {
    // DB not connected yet, use defaults
  }

  return (
    <html lang="en" className="dark">
      <body className="min-h-screen font-sans">
        <SiteConfigProvider initialConfig={config}>
          <CartProvider>
            <ToastProvider>{children}</ToastProvider>
          </CartProvider>
        </SiteConfigProvider>
      </body>
    </html>
  );
}
