import React from "react";
import "../../styles/Categoria.css";

const CategoriaArtropodos = () => {
  const productos = [
    {
      id: 1,
      nombre: "Tarántula Rosa Chilena",
      precio: 450,
      imagen: "/assets/tarantula.jpg",
    },
    {
      id: 2,
      nombre: "Escorpión Emperador",
      precio: 600,
      imagen: "/assets/escorpion.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Artrópodos Disponibles</h2>
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

export default CategoriaArtropodos;
