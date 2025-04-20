import React from "react";
import "../../styles/Categoria.css";

const CategoriaPiton = () => {
  const productos = [
    {
      id: 1,
      nombre: "Pitón Bola Normal",
      precio: 2200,
      imagen: "/assets/piton-bola.jpg",
    },
    {
      id: 2,
      nombre: "Pitón Bola Morph Banana",
      precio: 4500,
      imagen: "/assets/piton-banana.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Pitones Bola Disponibles</h2>
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

export default CategoriaPiton;
