import React from "react";
import "../../styles/Categoria.css";

const CategoriaSerpientes = () => {
  const productos = [
    {
      id: 1,
      nombre: "Serpiente del Maíz",
      precio: 1800,
      imagen: "/assets/serpiente-maiz.jpg",
    },
    {
      id: 2,
      nombre: "Falsa Coral",
      precio: 2200,
      imagen: "/assets/falsa-coral.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Serpientes Disponibles</h2>
      <div className="productos-grid">
        {productos.map((item) => (
          <div key={item.id} className="producto-card">
            <img src={item.imagen} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p>${item.precio} MXN</p>
            <button>Añadir al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriaSerpientes;
