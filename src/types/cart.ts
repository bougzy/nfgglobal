export interface CartItem {
  productId: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  quantity: number;
  maxQuantity: number;
}

export interface CartState {
  items: CartItem[];
  isHydrated: boolean;
}

export type CartAction =
  | { type: "HYDRATE"; payload: CartItem[] }
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "CLEAR_CART" };
