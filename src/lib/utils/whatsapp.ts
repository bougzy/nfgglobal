import { CartItem } from "@/types/cart";

interface WhatsAppCheckoutOptions {
  items: CartItem[];
  totalPrice: number;
  currencySymbol: string;
  currencyCode: string;
  storeName: string;
  whatsappNumber: string;
}

export function generateWhatsAppCheckoutURL({
  items,
  totalPrice,
  currencySymbol,
  currencyCode,
  storeName,
  whatsappNumber,
}: WhatsAppCheckoutOptions): string {
  const itemLines = items.map(
    (item, index) =>
      `${index + 1}. ${item.name} – ${currencySymbol}${item.price.toLocaleString("en-US")} x${item.quantity}`
  );

  const message = [
    `Hello ${storeName},`,
    "",
    "I would like to order:",
    "",
    ...itemLines,
    "",
    `Total: ${currencySymbol}${totalPrice.toLocaleString("en-US")} ${currencyCode}`,
    "",
    "Thank you.",
  ].join("\n");

  const encodedMessage = encodeURIComponent(message);
  const cleanNumber = whatsappNumber.replace(/\D/g, "");

  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}
