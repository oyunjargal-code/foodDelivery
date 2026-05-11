"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Food } from "../_components/ClientFoodsCard";

type CartItem = {
  food: Food;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (food: Food, quantity: number) => void;
  removeFromCart: (foodId: number) => void;
  totalCount: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(food: Food, quantity: number) {
    setItems((prev) => {
      const existing = prev.find((item) => item.food.id === food.id);
      if (existing) {
        return prev.map((item) =>
          item.food.id === food.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prev, { food, quantity }];
    });
  }

  function removeFromCart(foodId: number) {
    setItems((prev) => prev.filter((item) => item.food.id !== foodId));
  }

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, totalCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
