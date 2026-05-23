# Food Store — Programación III

**Tecnicatura Universitaria en Programación · UTN**  
Recuperatorio Evaluación Parcial 1 — Programación III · 2026

---

## Descripción

Food Store es una aplicación web frontend que simula el sitio de una casa de comidas o rotisería. Permite explorar un catálogo de productos, buscarlos por nombre, filtrarlos por categoría y gestionar un carrito de compras con persistencia en `localStorage`.

El proyecto fue desarrollado con HTML5, CSS3, TypeScript y Vite, sin el uso de frameworks externos, como parte de la instancia de recuperación del Primer Parcial de la materia Programación III.

---

## Funcionalidades

- Catálogo de productos renderizado dinámicamente desde un array de datos
- Búsqueda de productos por nombre en tiempo real (ignora acentos y mayúsculas)
- Filtrado por categoría desde el menú lateral (Pizzas, Hamburguesas, Bebidas, Postres, Empanadas, Ensaladas)
- Agregar productos al carrito con indicador visual de confirmación
- Si un producto ya está en el carrito, se incrementa su cantidad en lugar de duplicarse
- Vista del carrito con nombre, precio unitario, cantidad y subtotal por ítem
- Controles para modificar cantidades (+/−) y eliminar ítems
- Cálculo automático del total de la compra
- Persistencia del carrito mediante `localStorage`
- Diseño dark con paleta dorada, responsive

---

## Tecnologías

- HTML5
- CSS3
- TypeScript
- Vite

---

## Estructura del proyecto

```
src/
├── data/
│   └── data.ts               # Productos y categorías
├── types/
│   ├── product.ts            # Interfaces Product y CartItem
│   └── categoria.ts          # Interface ICategory
├── utils/
│   └── cart.ts               # Lógica del carrito (localStorage)
└── pages/
    └── store/
        ├── home/
        │   ├── home.html     # Catálogo de productos
        │   └── home.ts       # Lógica: render, búsqueda, filtros, carrito
        └── cart/
            ├── cart.html     # Vista del carrito
            └── cart.ts       # Lógica: render, cantidades, total
style.css                     # Estilos globales y variables
```

---

## Instalación y ejecución

Requiere Node.js 18+ y pnpm.

```bash
# 1. Clonar el repositorio
git clone https://github.com/JoacoPerezCampos/FoodStore_Prog3-Perez_Campos_JoaquinJoaquin.git
cd FoodStore_Prog3-Perez_Campos_JoaquinJoaquin

# 2. Instalar dependencias
pnpm install

# 3. Iniciar servidor de desarrollo
pnpm dev
```

La aplicación estará disponible en `http://localhost:5173` y redirigirá automáticamente al catálogo.

---

## Repositorio

[https://github.com/JoacoPerezCampos/FoodStore_Prog3-Perez_Campos_JoaquinJoaquin.git](https://github.com/JoacoPerezCampos/FoodStore_Prog3-Perez_Campos_JoaquinJoaquin.git)

---

## Link al video explicativo en YouTube

_("https://youtu.be/fng8UqLCRMg")_

---

## Autor

**Joaquín Pérez Campos**  
Tecnicatura Universitaria en Programación · UTN