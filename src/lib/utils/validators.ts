import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(6).max(100),
});

export const productSchema = z.object({
  name: z.string().min(2).max(200).trim(),
  description: z.string().min(10).max(5000).trim(),
  price: z.number().positive(),
  images: z.array(z.string().url()).min(1, "At least one image is required"),
  category: z.string().min(1, "Category is required"),
  inventory: z.number().int().min(0),
  isJustArrived: z.boolean().default(false),
  isActive: z.boolean().default(true),
});

export const categorySchema = z.object({
  name: z.string().min(2).max(100).trim(),
  order: z.number().int().min(0),
  isActive: z.boolean().default(true),
});

export const siteConfigSchema = z.object({
  storeName: z.string().min(1).max(100).trim(),
  logo: z.string().url().or(z.literal("")),
  whatsappNumber: z.string().regex(/^\d{10,15}$/, "Must be 10-15 digits"),
  currencyCode: z.string().min(1).max(5).toUpperCase(),
  currencySymbol: z.string().min(1).max(5),
  heroTitle: z.string().max(200).optional(),
  heroSubtitle: z.string().max(500).optional(),
  theme: z.object({
    primaryColor: z.string().regex(/^#[0-9a-fA-F]{6}$/),
    secondaryColor: z.string().regex(/^#[0-9a-fA-F]{6}$/),
    accentColor: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  }),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(6),
  newPassword: z.string().min(6).max(100),
});
