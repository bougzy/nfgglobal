import { dbConnect } from "./connection";
import { Category } from "./models/category.model";
import { Product } from "./models/product.model";
import { Admin } from "./models/admin.model";
import { SiteConfig } from "./models/site-config.model";
import { hashPassword } from "../auth/password";

const DEMO_CATEGORIES = [
  { name: "Diamond Jewelry", slug: "diamond-jewelry", order: 1, isActive: true },
  { name: "Gold & Luxury Jewelry", slug: "gold-luxury-jewelry", order: 2, isActive: true },
  { name: "Children's Wears", slug: "childrens-wears", order: 3, isActive: true },
  { name: "Fashion Accessories", slug: "fashion-accessories", order: 4, isActive: true },
  { name: "Premium Gifts", slug: "premium-gifts", order: 5, isActive: true },
];

const DEMO_PRODUCTS = [
  {
    name: "Diamond Necklace",
    slug: "diamond-necklace",
    description:
      "Exquisite diamond necklace featuring brilliant-cut stones set in 18K white gold. A timeless piece that radiates elegance and sophistication for any special occasion.",
    price: 2500000,
    images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop"],
    categorySlug: "diamond-jewelry",
    inventory: 5,
    isJustArrived: true,
    isActive: true,
  },
  {
    name: "Diamond Ring",
    slug: "diamond-ring",
    description:
      "Stunning solitaire diamond ring in a platinum setting. Features a brilliant 1.5-carat diamond with exceptional clarity and fire. Perfect for engagements and special occasions.",
    price: 1800000,
    images: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop"],
    categorySlug: "diamond-jewelry",
    inventory: 8,
    isJustArrived: true,
    isActive: true,
  },
  {
    name: "Gold Bracelet",
    slug: "gold-bracelet",
    description:
      "Luxurious 18K gold bracelet with intricate filigree design. Handcrafted by master artisans, this bracelet combines traditional craftsmanship with modern elegance.",
    price: 950000,
    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop"],
    categorySlug: "gold-luxury-jewelry",
    inventory: 12,
    isJustArrived: false,
    isActive: true,
  },
  {
    name: "Children Designer Outfit",
    slug: "children-designer-outfit",
    description:
      "Premium designer outfit for children aged 3-8 years. Made from the finest materials with attention to comfort and style. Perfect for special occasions and celebrations.",
    price: 75000,
    images: ["https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&h=800&fit=crop"],
    categorySlug: "childrens-wears",
    inventory: 20,
    isJustArrived: true,
    isActive: true,
  },
  {
    name: "Luxury Kids Shoes",
    slug: "luxury-kids-shoes",
    description:
      "Handcrafted Italian leather shoes for kids. Designed for both comfort and elegance, these shoes feature premium materials and expert craftsmanship.",
    price: 45000,
    images: ["https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&h=800&fit=crop"],
    categorySlug: "childrens-wears",
    inventory: 15,
    isJustArrived: false,
    isActive: true,
  },
];

const DEFAULT_SITE_CONFIG = {
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
};

export async function seedDatabase() {
  await dbConnect();

  const existingProducts = await Product.countDocuments();
  if (existingProducts > 0) {
    return { message: "Database already seeded", seeded: false };
  }

  // Seed categories
  const categories = await Category.insertMany(DEMO_CATEGORIES);
  const categoryMap = new Map(
    categories.map((c) => [c.slug, c._id])
  );

  // Seed products with resolved category IDs
  const productsWithIds = DEMO_PRODUCTS.map(
    ({ categorySlug, ...product }) => ({
      ...product,
      category: categoryMap.get(categorySlug),
    })
  );
  await Product.insertMany(productsWithIds);

  // Seed default admin
  const passwordHash = await hashPassword("admin123");
  await Admin.create({ username: "admin", passwordHash });

  // Seed site config
  await SiteConfig.create(DEFAULT_SITE_CONFIG);

  return { message: "Database seeded successfully", seeded: true };
}
