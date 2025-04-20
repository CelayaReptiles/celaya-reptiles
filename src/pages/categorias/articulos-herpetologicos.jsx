import React from "react";
import "../../styles/Categoria.css";

const CategoriaHerpetologicos = () => {
  const productos = [
    {
      id: 1,
      nombre: "Pinzas para Alimentación",
      precio: 75,
      imagen: "/assets/pinzas.jpg",
    },
    {
      id: 2,
      nombre: "Caja de Transporte Plástica",
      precio: 160,
      imagen: "/assets/caja-transporte.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Artículos Herpetológicos Disponibles</h2>
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

export default CategoriaHerpetologicos;
