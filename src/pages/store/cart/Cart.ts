import { getCart, calcularTotal, saveCart } from "../../../utils/cart";
import type { CartItem } from "../../../types/Product";

// ── Referencias al DOM ────────────────────────────────────────────────────────
const cartContainer = document.getElementById("cart-container") as HTMLElement;
const totalElement  = document.getElementById("cart-total")     as HTMLElement;
const cartCount     = document.getElementById("cart-count")     as HTMLElement;

// ── Render del carrito ────────────────────────────────────────────────────────
function renderCarrito(): void {
  const items: CartItem[] = getCart();
  cartContainer.innerHTML = "";

  if (items.length === 0) {
    cartContainer.innerHTML = `
      <p class="carrito-vacio">Tu carrito está vacío.
        <a href="../home/home.html">Volver al catálogo</a>
      </p>
    `;
    actualizarTotal(0);
    actualizarContadorCarrito(0);
    return;
  }

  items.forEach((item, index) => {
    cartContainer.appendChild(crearFilaItem(item, index));
  });

  const total = calcularTotal(items);
  actualizarTotal(total);
  actualizarContadorCarrito(items.reduce((sum, i) => sum + i.cantidad, 0));
}

function crearFilaItem(item: CartItem, index: number): HTMLElement {
  const fila = document.createElement("div");
  fila.classList.add("cart-item");

  const subtotal = item.producto.precio * item.cantidad;

  // Fila superior: info del producto
  const top = document.createElement("div");
  top.classList.add("cart-item-info");
  top.innerHTML = `
    <p class="cart-item-nombre">${item.producto.nombre}</p>
    <p class="cart-item-precio">$${item.producto.precio.toLocaleString("es-AR", { minimumFractionDigits: 0 })} c/u</p>
  `;

  // Fila inferior: cantidad + subtotal + eliminar
  const bottom = document.createElement("div");
  bottom.classList.add("cart-item-bottom");
  bottom.innerHTML = `
    <div class="cart-item-cantidad">
      <button class="btn-cantidad" data-index="${index}" data-accion="restar">−</button>
      <span class="cantidad-valor">${item.cantidad}</span>
      <button class="btn-cantidad" data-index="${index}" data-accion="sumar">+</button>
    </div>
    <div class="cart-item-subtotal">
      $${subtotal.toLocaleString("es-AR", { minimumFractionDigits: 0 })}
    </div>
    <button class="btn-eliminar" data-index="${index}">✕</button>
  `;

  fila.appendChild(top);
  fila.appendChild(bottom);

  // Eventos cantidad
  bottom.querySelectorAll<HTMLButtonElement>(".btn-cantidad").forEach((btn) => {
    btn.addEventListener("click", () => {
      cambiarCantidad(Number(btn.dataset.index), btn.dataset.accion!);
    });
  });

  // Evento eliminar
  bottom.querySelector<HTMLButtonElement>(".btn-eliminar")!
    .addEventListener("click", () => eliminarItem(index));

  return fila;
}

// ── Modificar cantidades ──────────────────────────────────────────────────────
function cambiarCantidad(index: number, accion: string): void {
  const items = getCart();
  if (accion === "sumar") {
    items[index].cantidad += 1;
  } else if (accion === "restar") {
    items[index].cantidad -= 1;
    if (items[index].cantidad <= 0) items.splice(index, 1);
  }
  saveCart(items);
  renderCarrito();
}

function eliminarItem(index: number): void {
  const items = getCart();
  items.splice(index, 1);
  saveCart(items);
  renderCarrito();
}

// ── Total ─────────────────────────────────────────────────────────────────────
function actualizarTotal(total: number): void {
  if (totalElement) {
    totalElement.textContent = `$ ${total.toLocaleString("es-AR", { minimumFractionDigits: 0 })}`;
  }
}

function actualizarContadorCarrito(cantidad: number): void {
  if (cartCount) cartCount.textContent = String(cantidad);
}

// ── Init ──────────────────────────────────────────────────────────────────────
renderCarrito();