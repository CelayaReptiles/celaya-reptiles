import React from "react";
import { useCart } from "../context/CartContext";
import "./Tienda.css";

function Tienda() {
  const { agregarAlCarrito } = useCart();

  const productos = [
    {
      id: 1,
      nombre: "Gecko Leopardo",
      precio: 850,
      imagen: "https://via.placeholder.com/200x150?text=Gecko+Leopardo",
    },
    {
      id: 2,
      nombre: "Serpiente del Maíz",
      precio: 1200,
      imagen: "https://via.placeholder.com/200x150?text=Serpiente+del+Maiz",
    },
    {
      id: 3,
      nombre: "Dragón Barbudo",
      precio: 1800,
      imagen: "https://via.placeholder.com/200x150?text=Dragon+Barbudo",
    },
  ];

  return (
    <div className="tienda-container">
      <h2 className="tienda-title">🐍 Nuestra Tienda</h2>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>${producto.precio} MXN</p>
            <button onClick={() => agregarAlCarrito(producto)}>
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tienda;
