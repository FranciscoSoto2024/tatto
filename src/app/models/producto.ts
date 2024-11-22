export interface Producto {
    idProducto: string; // Identificador único del producto.
    nombre: string;     // Nombre del producto.
    precio: number;     // Precio del producto expresado en números.
    descripcion: string; // Descripción detallada del producto.
    categoria: string;  // Categoría a la que pertenece el producto (ejemplo: "Electrónica", "Hogar").
    imagen: string;     // URL de la imagen asociada al producto.
    alt: string;        // Texto alternativo para la imagen del producto, útil para accesibilidad y SEO.
}