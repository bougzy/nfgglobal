"use client";

import {
  createContext,
  useReducer,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { CartItem, CartState, CartAction } from "@/types/cart";
import { CART_STORAGE_KEY } from "@/lib/constants";

const initialState: CartState = {
  items: [],
  isHydrated: false,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, items: action.payload, isHydrated: true };

    case "ADD_ITEM": {
      const existing = state.items.find(
        (i) => i.productId === action.payload.productId
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.productId === action.payload.productId
              ? {
                  ...i,
                  quantity: Math.min(
                    i.quantity + action.payload.quantity,
                    i.maxQuantity
                  ),
                }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, action.payload] };
    }

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((i) =>
          i.productId === action.payload.productId
            ? { ...i, quantity: Math.max(1, Math.min(action.payload.quantity, i.maxQuantity)) }
            : i
        ),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((i) => i.productId !== action.payload),
      };

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
}

interface CartContextValue {
  state: CartState;
  addItem: (item: CartItem) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        dispatch({ type: "HYDRATE", payload: JSON.parse(stored) });
      } else {
        dispatch({ type: "HYDRATE", payload: [] });
      }
    } catch {
      dispatch({ type: "HYDRATE", payload: [] });
    }
  }, []);

  useEffect(() => {
    if (state.isHydrated) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    }
  }, [state.items, state.isHydrated]);

  const addItem = useCallback((item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  }, []);

  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } });
    },
    []
  );

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: productId });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
