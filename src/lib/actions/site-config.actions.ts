"use server";

import { revalidatePath } from "next/cache";
import { dbConnect } from "@/lib/db/connection";
import { SiteConfig } from "@/lib/db/models/site-config.model";

export async function getSiteConfig() {
  await dbConnect();

  let config = await SiteConfig.findOne().lean();

  if (!config) {
    config = await SiteConfig.create({
      storeName: "NFG Global",
      logo: "",
      whatsappNumber: "2348000000000",
      currencyCode: "NGN",
      currencySymbol: "₦",
      heroTitle: "Luxury & Style, Delivered",
      heroSubtitle:
        "Discover premium jewelry, fashion, and gifts. Shop now and checkout via WhatsApp.",
      theme: {
        primaryColor: "#d4af37",
        secondaryColor: "#1a1a2e",
        accentColor: "#10b981",
      },
    });
    config = config.toObject();
  }

  return JSON.parse(JSON.stringify(config));
}

export async function updateSiteConfig(data: {
  storeName?: string;
  logo?: string;
  whatsappNumber?: string;
  currencyCode?: string;
  currencySymbol?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };
}) {
  await dbConnect();

  const config = await SiteConfig.findOneAndUpdate({}, { $set: data }, { new: true });

  if (!config) {
    return { success: false, error: "Site config not found" };
  }

  revalidatePath("/");
  revalidatePath("/admin/dashboard/settings");
  revalidatePath("/admin/dashboard/branding");

  return { success: true, config: JSON.parse(JSON.stringify(config)) };
}
