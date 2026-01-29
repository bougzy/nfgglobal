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
  // ── Diamond Jewelry ──────────────────────────────────
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
    name: "Diamond Stud Earrings",
    slug: "diamond-stud-earrings",
    description:
      "Classic diamond stud earrings with 0.75-carat total weight. Set in 14K white gold with secure screw-back closures. The perfect everyday luxury accessory.",
    price: 1200000,
    images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop"],
    categorySlug: "diamond-jewelry",
    inventory: 10,
    isJustArrived: false,
    isActive: true,
  },
  {
    name: "Diamond Tennis Bracelet",
    slug: "diamond-tennis-bracelet",
    description:
      "Stunning 5-carat diamond tennis bracelet in 18K white gold. Features 42 perfectly matched round brilliant diamonds. An iconic statement of refined taste.",
    price: 3200000,
    images: ["https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=800&fit=crop"],
    categorySlug: "diamond-jewelry",
    inventory: 3,
    isJustArrived: true,
    isActive: true,
  },
  {
    name: "Diamond Pendant",
    slug: "diamond-pendant",
    description:
      "Elegant pear-shaped diamond pendant on an 18K white gold chain. The 1-carat center stone catches light beautifully from every angle. Comes with a premium gift box.",
    price: 1450000,
    images: ["https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=800&fit=crop"],
    categorySlug: "diamond-jewelry",
    inventory: 6,
    isJustArrived: false,
    isActive: true,
  },
  {
    name: "Diamond Eternity Band",
    slug: "diamond-eternity-band",
    description:
      "Full eternity band featuring 2.5 carats of round brilliant diamonds set in platinum. A symbol of everlasting love and commitment. Available in multiple sizes.",
    price: 2100000,
    images: ["https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&h=800&fit=crop"],
    categorySlug: "diamond-jewelry",
    inventory: 4,
    isJustArrived: true,
    isActive: true,
  },

  // ── Gold & Luxury Jewelry ────────────────────────────
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
    name: "Gold Chain Necklace",
    slug: "gold-chain-necklace",
    description:
      "Bold 22K gold Cuban link chain necklace. 20 inches of pure luxury with a secure lobster clasp. A statement piece that commands attention.",
    price: 1650000,
    images: ["https://images.unsplash.com/photo-1515562141589-67f0d569b6fc?w=800&h=800&fit=crop"],
    categorySlug: "gold-luxury-jewelry",
    inventory: 7,
    isJustArrived: true,
    isActive: true,
  },
  {
    name: "Gold Hoop Earrings",
    slug: "gold-hoop-earrings",
    description:
      "Sleek 18K gold hoop earrings with a polished finish. Medium-sized hoops that pair perfectly with any outfit, from casual to formal. Lightweight and comfortable for all-day wear.",
    price: 420000,
    images: ["https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=800&fit=crop"],
    categorySlug: "gold-luxury-jewelry",
    inventory: 15,
    isJustArrived: false,
    isActive: true,
  },
  {
    name: "Gold Signet Ring",
    slug: "gold-signet-ring",
    description:
      "Classic 18K gold signet ring with a flat oval face for personalized engraving. A timeless accessory steeped in heritage and tradition. Available in sizes 6-13.",
    price: 580000,
    images: ["https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=800&fit=crop"],
    categorySlug: "gold-luxury-jewelry",
    inventory: 9,
    isJustArrived: false,
    isActive: true,
  },
  {
    name: "Pearl & Gold Necklace",
    slug: "pearl-gold-necklace",
    description:
      "Exquisite freshwater pearl necklace with 14K gold accents and clasp. Features 8mm perfectly round pearls with beautiful lustre. A sophisticated addition to any jewelry collection.",
    price: 780000,
    images: ["https://images.unsplash.com/photo-1515562141589-67f0d569b6fc?w=800&h=800&fit=crop"],
    categorySlug: "gold-luxury-jewelry",
    inventory: 6,
    isJustArrived: true,
    isActive: true,
  },
  {
    name: "Gold Cuff Bracelet",
    slug: "gold-cuff-bracelet",
    description:
      "Modern 18K gold cuff bracelet with a hammered texture finish. Adjustable to fit most wrist sizes. A bold piece that bridges contemporary design and classic luxury.",
    price: 720000,
    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop"],
    categorySlug: "gold-luxury-jewelry",
    inventory: 8,
    isJustArrived: false,
    isActive: true,
  },

  // ── Children's Wears ─────────────────────────────────
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
  {
    name: "Kids Party Dress",
    slug: "kids-party-dress",
    description:
      "Beautiful tulle party dress for girls aged 4-10. Features delicate embroidery, satin lining, and a full skirt. Available in blush pink and ivory. Makes every little girl feel like a princess.",
    price: 65000,
    images: ["https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&h=800&fit=crop"],
    categorySlug: "childrens-wears",
    inventory: 18,
    isJustArrived: true,
    isActive: true,
  },
  {
    name: "Boys Formal Suit Set",
    slug: "boys-formal-suit-set",
    description:
      "Dapper three-piece suit set for boys aged 3-12. Includes jacket, trousers, and vest in premium wool blend. Perfect for weddings, ceremonies, and formal events.",
    price: 85000,
    images: ["https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800&h=800&fit=crop"],
    categorySlug: "childrens-wears",
    inventory: 12,
    isJustArrived: false,
    isActive: true,
  },
  {
    name: "Kids Sneakers Collection",
    slug: "kids-sneakers-collection",
    description:
      "Trendy designer sneakers for kids. Lightweight with cushioned soles for all-day comfort. Features vibrant colours and durable construction built for active children.",
    price: 35000,
    images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=800&fit=crop"],
    categorySlug: "childrens-wears",
    inventory: 25,
    isJustArrived: false,
    isActive: true,
  },
  {
    name: "Baby Gift Set",
    slug: "baby-gift-set",
    description:
      "Adorable premium baby gift set including romper, bib, booties, and blanket. Made from 100% organic cotton. Beautifully packaged in a keepsake box. Perfect for newborns.",
    price: 55000,
    images: ["https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&h=800&fit=crop"],
    categorySlug: "childrens-wears",
    inventory: 20,
    isJustArrived: true,
    isActive: true,
  },

  // ── Fashion Accessories ──────────────────────────────
  {
    name: "Leather Designer Handbag",
    slug: "leather-designer-handbag",
    description:
      "Premium Italian leather handbag with gold-tone hardware. Features multiple compartments, adjustable strap, and signature lining. A versatile bag for every occasion.",
    price: 320000,
    images: ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop"],
    categorySlug: "fashion-accessories",
    inventory: 10,
    isJustArrived: true,
    isActive: true,
  },
  {
    name: "Luxury Sunglasses",
    slug: "luxury-sunglasses",
    description:
      "Polarized luxury sunglasses with titanium frames and UV400 protection. Sleek oversized design that flatters all face shapes. Includes premium leather case.",
    price: 185000,
    images: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop"],
    categorySlug: "fashion-accessories",
    inventory: 14,
    isJustArrived: false,
    isActive: true,
  },
  {
    name: "Silk Designer Scarf",
    slug: "silk-designer-scarf",
    description:
      "100% mulberry silk scarf with hand-rolled edges. Features an exclusive abstract print in rich jewel tones. Can be worn as a neck scarf, headband, or bag accent.",
    price: 95000,
    images: ["https://images.unsplash.com/photo-1601924921557-45e8e0e22074?w=800&h=800&fit=crop"],
    categorySlug: "fashion-accessories",
    inventory: 20,
    isJustArrived: false,
    isActive: true,
  },
  {
    name: "Premium Leather Belt",
    slug: "premium-leather-belt",
    description:
      "Full-grain Italian leather belt with a brushed gold buckle. Reversible design offers black and brown options in a single belt. Adjustable for a perfect fit.",
    price: 68000,
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop"],
    categorySlug: "fashion-accessories",
    inventory: 18,
    isJustArrived: true,
    isActive: true,
  },
  {
    name: "Designer Watch",
    slug: "designer-watch",
    description:
      "Elegant automatic timepiece with sapphire crystal glass and genuine leather strap. Swiss movement with 42-hour power reserve. Water resistant to 50 metres.",
    price: 450000,
    images: ["https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=800&fit=crop"],
    categorySlug: "fashion-accessories",
    inventory: 5,
    isJustArrived: true,
    isActive: true,
  },
  {
    name: "Cashmere Beanie",
    slug: "cashmere-beanie",
    description:
      "Ultra-soft 100% cashmere beanie in a classic ribbed knit. Lightweight yet warm, perfect for cool weather. Available in black, grey, and camel.",
    price: 42000,
    images: ["https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&h=800&fit=crop"],
    categorySlug: "fashion-accessories",
    inventory: 22,
    isJustArrived: false,
    isActive: true,
  },
  {
    name: "Clutch Evening Bag",
    slug: "clutch-evening-bag",
    description:
      "Glamorous crystal-embellished clutch bag with detachable chain strap. Compact yet spacious enough for essentials. The ultimate accessory for galas and formal evenings.",
    price: 150000,
    images: ["https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop"],
    categorySlug: "fashion-accessories",
    inventory: 8,
    isJustArrived: true,
    isActive: true,
  },

  // ── Premium Gifts ────────────────────────────────────
  {
    name: "Crystal Perfume Set",
    slug: "crystal-perfume-set",
    description:
      "Luxury perfume gift set featuring three signature fragrances in hand-cut crystal bottles. Notes of oud, jasmine, and amber. Presented in a velvet-lined wooden box.",
    price: 280000,
    images: ["https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop"],
    categorySlug: "premium-gifts",
    inventory: 10,
    isJustArrived: true,
    isActive: true,
  },
  {
    name: "Luxury Pen Collection",
    slug: "luxury-pen-collection",
    description:
      "Exquisite fountain pen and ballpoint pen set crafted from lacquered metal with gold-plated accents. Smooth writing experience with German-engineered nibs. Includes premium leather case.",
    price: 165000,
    images: ["https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&h=800&fit=crop"],
    categorySlug: "premium-gifts",
    inventory: 15,
    isJustArrived: false,
    isActive: true,
  },
  {
    name: "Premium Chocolate Box",
    slug: "premium-chocolate-box",
    description:
      "Artisan chocolate collection featuring 36 handcrafted truffles in exotic flavours. Belgian couverture chocolate with fillings of champagne, sea salt caramel, and passion fruit.",
    price: 85000,
    images: ["https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&h=800&fit=crop"],
    categorySlug: "premium-gifts",
    inventory: 25,
    isJustArrived: true,
    isActive: true,
  },
  {
    name: "Scented Candle Set",
    slug: "scented-candle-set",
    description:
      "Set of four luxury soy wax candles in hand-poured ceramic vessels. Scents include vanilla bean, sandalwood, fresh linen, and wild fig. Burns for 60+ hours each.",
    price: 55000,
    images: ["https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&h=800&fit=crop"],
    categorySlug: "premium-gifts",
    inventory: 30,
    isJustArrived: false,
    isActive: true,
  },
  {
    name: "Leather Journal Set",
    slug: "leather-journal-set",
    description:
      "Hand-stitched full-grain leather journal with 200 pages of acid-free cotton paper. Includes a matching leather bookmark and premium brass pen. Perfect for writers and creatives.",
    price: 48000,
    images: ["https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&h=800&fit=crop"],
    categorySlug: "premium-gifts",
    inventory: 20,
    isJustArrived: false,
    isActive: true,
  },
  {
    name: "Luxury Spa Gift Box",
    slug: "luxury-spa-gift-box",
    description:
      "Indulgent spa gift box with bath bombs, body oil, face mask, hand cream, and silk eye mask. All products are organic and cruelty-free. Beautifully wrapped in a reusable keepsake box.",
    price: 120000,
    images: ["https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=800&fit=crop"],
    categorySlug: "premium-gifts",
    inventory: 14,
    isJustArrived: true,
    isActive: true,
  },
  {
    name: "Wine & Glass Gift Set",
    slug: "wine-glass-gift-set",
    description:
      "Premium red wine paired with two hand-blown crystal wine glasses. The wine is a rich, full-bodied Cabernet from a renowned vineyard. Presented in an elegant wooden crate.",
    price: 195000,
    images: ["https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&h=800&fit=crop"],
    categorySlug: "premium-gifts",
    inventory: 7,
    isJustArrived: false,
    isActive: true,
  },
  {
    name: "Engraved Money Clip",
    slug: "engraved-money-clip",
    description:
      "Sleek stainless steel money clip with 18K gold plating. Can be personalized with initials or a short message. A sophisticated gift for the modern gentleman.",
    price: 38000,
    images: ["https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&h=800&fit=crop"],
    categorySlug: "premium-gifts",
    inventory: 30,
    isJustArrived: true,
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
