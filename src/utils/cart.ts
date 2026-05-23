// src/utils/cart.ts
import type { CartItem, Product } from "../types/Product";

const CART_KEY = "foodstore_cart";

export function getCart(): CartItem[] {
  const data = localStorage.getItem(CART_KEY);
  if (!data) return [];
  return JSON.parse(data) as CartItem[];
}

export function saveCart(items: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function addToCart(producto: Product): void {
  const cart = getCart();
  const existing = cart.find((item) => item.producto.id === producto.id);

  if (existing) {
    existing.cantidad += 1;
  } else {
    cart.push({ producto, cantidad: 1 });
  }

  saveCart(cart);
}

export function calcularTotal(items: CartItem[]): number {
  return items.reduce(
    (total, item) => total + item.producto.precio * item.cantidad,
    0
  );
}

export function clearCart(): void {
  localStorage.removeItem(CART_KEY);
}