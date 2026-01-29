import mongoose, { Schema, Document } from "mongoose";

export interface ISiteConfigDoc extends Document {
  storeName: string;
  logo: string;
  whatsappNumber: string;
  currencyCode: string;
  currencySymbol: string;
  heroTitle: string;
  heroSubtitle: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };
}

const SiteConfigSchema = new Schema<ISiteConfigDoc>({
  storeName: { type: String, required: true },
  logo: { type: String, default: "" },
  whatsappNumber: { type: String, required: true },
  currencyCode: { type: String, default: "NGN" },
  currencySymbol: { type: String, default: "₦" },
  heroTitle: { type: String, default: "Luxury & Style, Delivered" },
  heroSubtitle: {
    type: String,
    default:
      "Discover premium jewelry, fashion, and gifts. Shop now and checkout via WhatsApp.",
  },
  theme: {
    primaryColor: { type: String, default: "#d4af37" },
    secondaryColor: { type: String, default: "#1a1a2e" },
    accentColor: { type: String, default: "#10b981" },
  },
});

export const SiteConfig =
  mongoose.models.SiteConfig ||
  mongoose.model<ISiteConfigDoc>("SiteConfig", SiteConfigSchema);
