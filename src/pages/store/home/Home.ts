// src/pages/store/home/home.ts
import { PRODUCTS, getCategories } from "../../../data/data";
import { addToCart, getCart } from "../../../utils/cart";
import type { Product } from "../../../types/Product";
import type { ICategory } from "../../../types/Category";

let categoriaSeleccionada: number | null = null;
let textoBusqueda: string = "";

const productosContainer = document.getElementById("productos-container") as HTMLElement;
const categoriasList     = document.getElementById("categorias-list")     as HTMLElement;
const searchInput        = document.getElementById("search-input")        as HTMLInputElement;
const cartCount          = document.getElementById("cart-count")          as HTMLElement;

// ── Normalizar texto (sin acentos, minúsculas) ────────────────────────────────
function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// ── Filtrado ──────────────────────────────────────────────────────────────────
function getProductosFiltrados(): Product[] {
  return PRODUCTS.filter((p) => {
    const coincideBusqueda = normalizar(p.nombre).includes(normalizar(textoBusqueda));
    const coincideCategoria =
      categoriaSeleccionada === null ||
      p.categorias.some((c) => c.id === categoriaSeleccionada);
    return coincideBusqueda && coincideCategoria;
  });
}

// ── Render productos ──────────────────────────────────────────────────────────
function renderProductos(): void {
  const productos = getProductosFiltrados();
  productosContainer.innerHTML = "";

  if (productos.length === 0) {
    productosContainer.innerHTML = `<p class="sin-resultados">No se encontraron productos para tu búsqueda.</p>`;
    return;
  }

  productos.forEach((producto) => {
    productosContainer.appendChild(crearCardProducto(producto));
  });
}

function crearCardProducto(producto: Product): HTMLElement {
  const card = document.createElement("div");
  card.classList.add("producto-card");
  if (!producto.disponible) card.classList.add("no-disponible");

  card.innerHTML = `
    <img class="producto-img" src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" />
    <div class="producto-info">
      <p class="producto-categoria">${producto.categorias.map((c) => c.nombre).join(", ")}</p>
      <h3 class="producto-nombre">${producto.nombre}</h3>
      <p class="producto-descripcion">${producto.descripcion}</p>
      <p class="producto-precio">$${producto.precio.toLocaleString("es-AR")}</p>
    </div>
    <div class="producto-acciones">
      ${
        producto.disponible
          ? `<button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>`
          : `<span class="sin-stock">Sin stock</span>`
      }
    </div>
  `;

  if (producto.disponible) {
    const btn = card.querySelector(".btn-agregar") as HTMLButtonElement;
    btn.addEventListener("click", () => onAgregarAlCarrito(producto, btn));
  }

  return card;
}

// ── Agregar al carrito ────────────────────────────────────────────────────────
function onAgregarAlCarrito(producto: Product, btn: HTMLButtonElement): void {
  addToCart(producto);
  actualizarContadorCarrito();
  btn.textContent = "¡Agregado!";
  btn.disabled = true;
  btn.classList.add("agregado");
  setTimeout(() => {
    btn.textContent = "Agregar al carrito";
    btn.disabled = false;
    btn.classList.remove("agregado");
  }, 1200);
}

// ── Render categorías ─────────────────────────────────────────────────────────
function renderCategorias(): void {
  const categorias: ICategory[] = getCategories();
  categoriasList.innerHTML = "";

  const liTodas = document.createElement("li");
  liTodas.textContent = "Todos";
  liTodas.classList.add("categoria-item", "activa");
  liTodas.addEventListener("click", () => seleccionarCategoria(null, liTodas));
  categoriasList.appendChild(liTodas);

  categorias.forEach((cat) => {
    const li = document.createElement("li");
    li.textContent = cat.nombre;
    li.classList.add("categoria-item");
    li.dataset.id = String(cat.id);
    li.addEventListener("click", () => seleccionarCategoria(cat.id, li));
    categoriasList.appendChild(li);
  });
}

function seleccionarCategoria(id: number | null, elemento: HTMLElement): void {
  categoriaSeleccionada = id;
  document.querySelectorAll(".categoria-item").forEach((el) => el.classList.remove("activa"));
  elemento.classList.add("activa");
  renderProductos();
}

// ── Contador carrito ──────────────────────────────────────────────────────────
function actualizarContadorCarrito(): void {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.cantidad, 0);
  if (cartCount) cartCount.textContent = String(total);
}

// ── Búsqueda ──────────────────────────────────────────────────────────────────
function iniciarBusqueda(): void {
  searchInput.addEventListener("input", () => {
    textoBusqueda = searchInput.value;
    renderProductos();
  });
}

// ── Init ──────────────────────────────────────────────────────────────────────
function init(): void {
  renderCategorias();
  renderProductos();
  iniciarBusqueda();
  actualizarContadorCarrito();
}

init();