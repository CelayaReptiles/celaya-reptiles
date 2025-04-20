import React from "react";
import "../../styles/Categoria.css";

const CategoriaGeckos = () => {
  const productos = [
    {
      id: 1,
      nombre: "Gecko Leopardo High Yellow",
      precio: 950,
      imagen: "/assets/gecko-leopardo.jpg",
    },
    {
      id: 2,
      nombre: "Gecko Leopardo Albino",
      precio: 1200,
      imagen: "/assets/gecko-leopardo-albino.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Geckos Leopardo Disponibles</h2>
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

export default CategoriaGeckos;
