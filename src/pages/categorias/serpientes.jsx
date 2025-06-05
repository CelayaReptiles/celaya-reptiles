import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
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
      imagen: "/assets/serpiente.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Serpientes Disponibles</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaSerpientes;
