import type { Product } from "../types/Product";
import type { ICategory } from "../types/Category";

const categorias: ICategory[] = [
  { id: 1, eliminado: false, createdAt: "2024-01-15T10:00:00", nombre: "Pizzas", descripcion: "Pizzas artesanales con masa fresca" },
  { id: 2, eliminado: false, createdAt: "2024-01-15T10:05:00", nombre: "Hamburguesas", descripcion: "Hamburguesas gourmet con ingredientes frescos" },
  { id: 3, eliminado: false, createdAt: "2024-01-16T09:00:00", nombre: "Bebidas", descripcion: "Gaseosas, jugos y bebidas frías" },
  { id: 4, eliminado: false, createdAt: "2024-01-16T09:30:00", nombre: "Postres", descripcion: "Tortas, helados y dulces artesanales" },
  { id: 5, eliminado: false, createdAt: "2024-01-17T08:00:00", nombre: "Empanadas", descripcion: "Empanadas horneadas y fritas de distintos sabores" },
  { id: 6, eliminado: false, createdAt: "2024-01-17T08:30:00", nombre: "Ensaladas", descripcion: "Ensaladas frescas y saludables" },
];

export const PRODUCTS: Product[] = [
  {
    id: 1, eliminado: false, createdAt: "2024-02-01T08:00:00",
    nombre: "Pizza Muzzarella", precio: 4500,
    descripcion: "Pizza clásica con salsa de tomate y muzzarella derretida",
    stock: 20, disponible: true, categorias: [categorias[0]],
    imagen: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
  },
  {
    id: 2, eliminado: false, createdAt: "2024-02-01T08:30:00",
    nombre: "Pizza Napolitana", precio: 5200,
    descripcion: "Pizza con rodajas de tomate fresco, ajo y albahaca",
    stock: 15, disponible: true, categorias: [categorias[0]],
    imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  },
  {
    id: 3, eliminado: false, createdAt: "2024-02-02T09:00:00",
    nombre: "Pizza Especial 4 Quesos", precio: 6800,
    descripcion: "Muzzarella, provolone, roquefort y parmesano",
    stock: 10, disponible: true, categorias: [categorias[0]],
    imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
  },
  {
    id: 4, eliminado: false, createdAt: "2024-02-02T09:30:00",
    nombre: "Hamburguesa Clásica", precio: 3800,
    descripcion: "Medallón de carne, lechuga, tomate, cebolla y mayo",
    stock: 30, disponible: true, categorias: [categorias[1]],
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  },
  {
    id: 5, eliminado: false, createdAt: "2024-02-03T10:00:00",
    nombre: "Hamburguesa BBQ Bacon", precio: 5100,
    descripcion: "Doble medallón, bacon crocante y salsa barbacoa ahumada",
    stock: 25, disponible: true, categorias: [categorias[1]],
    imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80",
  },
  {
    id: 6, eliminado: false, createdAt: "2024-02-03T11:00:00",
    nombre: "Hamburguesa Veggie", precio: 4200,
    descripcion: "Medallón de lentejas y garbanzo, cheddar vegano y rúcula",
    stock: 0, disponible: false, categorias: [categorias[1]],
    imagen: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80",
  },
  {
    id: 7, eliminado: false, createdAt: "2024-02-04T09:00:00",
    nombre: "Coca-Cola 500ml", precio: 1200,
    descripcion: "Gaseosa Coca-Cola fría, botella personal",
    stock: 100, disponible: true, categorias: [categorias[2]],
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80",
  },
  {
    id: 8, eliminado: false, createdAt: "2024-02-04T10:00:00",
    nombre: "Jugo de Naranja Natural", precio: 1800,
    descripcion: "Jugo exprimido en el momento, vaso 400ml",
    stock: 40, disponible: true, categorias: [categorias[2]],
    imagen: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80",
  },
  {
    id: 9, eliminado: false, createdAt: "2024-02-05T08:00:00",
    nombre: "Agua Mineral 500ml", precio: 800,
    descripcion: "Agua mineral sin gas, botella personal",
    stock: 150, disponible: true, categorias: [categorias[2]],
    imagen: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80",
  },
  {
    id: 10, eliminado: false, createdAt: "2024-02-05T09:00:00",
    nombre: "Torta Rogel", precio: 3500,
    descripcion: "Torta rogel tradicional con dulce de leche y merengue",
    stock: 12, disponible: true, categorias: [categorias[3]],
    imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80",
  },
  {
    id: 11, eliminado: false, createdAt: "2024-02-06T08:00:00",
    nombre: "Helado Artesanal 2 gustos", precio: 2800,
    descripcion: "Pote de 250g, elegí 2 gustos entre 12 opciones",
    stock: 30, disponible: true, categorias: [categorias[3]],
    imagen: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80",
  },
  {
    id: 12, eliminado: false, createdAt: "2024-02-06T09:00:00",
    nombre: "Brownie con Helado", precio: 2200,
    descripcion: "Brownie de chocolate tibio con bocha de vainilla",
    stock: 0, disponible: false, categorias: [categorias[3]],
    imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
  },
  {
    id: 13, eliminado: false, createdAt: "2024-02-07T09:00:00",
    nombre: "Empanadas de Carne x6", precio: 3000,
    descripcion: "Empanadas criollas de carne cortada a cuchillo, horneadas",
    stock: 50, disponible: true, categorias: [categorias[4]],
    imagen: "https://unsplash.com/photos/kJ6myhO23PI/download?force=true&w=640",
  },
  {
    id: 14, eliminado: false, createdAt: "2024-02-07T10:00:00",
    nombre: "Empanadas de Pollo x6", precio: 2800,
    descripcion: "Empanadas de pollo con morrón y verdeo, horneadas",
    stock: 45, disponible: true, categorias: [categorias[4]],
    imagen: "https://unsplash.com/photos/zW0AwHxPySA/download?force=true&w=640",
  },
  {
    id: 15, eliminado: false, createdAt: "2024-02-08T08:00:00",
    nombre: "Empanadas de Jamón y Queso x6", precio: 2500,
    descripcion: "Empanadas fritas con jamón cocido y queso fundido",
    stock: 60, disponible: true, categorias: [categorias[4]],
    imagen: "https://unsplash.com/photos/3uNOYXf6-MI/download?force=true&w=640",
  },
  {
    id: 16, eliminado: false, createdAt: "2024-02-08T09:00:00",
    nombre: "Ensalada César", precio: 3200,
    descripcion: "Lechuga romana, crutones, parmesano y aderezo césar",
    stock: 20, disponible: true, categorias: [categorias[5]],
    imagen: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80",
  },
  {
    id: 17, eliminado: false, createdAt: "2024-02-09T08:00:00",
    nombre: "Ensalada Caprese", precio: 2900,
    descripcion: "Tomate, muzzarella fresca, albahaca y aceite de oliva",
    stock: 18, disponible: true, categorias: [categorias[5]],
    imagen: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&q=80",
  },
  {
    id: 18, eliminado: false, createdAt: "2024-02-09T09:00:00",
    nombre: "Pizza Fugazzeta", precio: 5500,
    descripcion: "Pizza rellena de muzzarella con cebolla caramelizada",
    stock: 10, disponible: true, categorias: [categorias[0]],
    imagen: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&q=80",
  },
  {
    id: 19, eliminado: false, createdAt: "2024-02-10T08:00:00",
    nombre: "Hamburguesa Crispy Chicken", precio: 4600,
    descripcion: "Pollo apanado crocante, coleslaw y salsa honey mustard",
    stock: 0, disponible: false, categorias: [categorias[1]],
    imagen: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80",
  },
  {
    id: 20, eliminado: false, createdAt: "2024-02-10T09:00:00",
    nombre: "Ensalada Mixta", precio: 2400,
    descripcion: "Lechuga, tomate, zanahoria rallada y aceitunas",
    stock: 25, disponible: true, categorias: [categorias[5]],
    imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
  },
];

export function getCategories(): ICategory[] {
  return categorias.filter((c) => !c.eliminado);
}