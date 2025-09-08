import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
const CategoriaPiton = () => {
  const productos = [
    {
      id: 1,
      nombre: "Pitón Bola Normal",
      precio: 2200,
      imagen: "/assets/pitones-bola.jpg",
    },
    {
      id: 2,
      nombre: "Pitón Bola Morph Banana",
      precio: 4500,
      imagen: "/assets/pitones-bola.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Pitones Bola Disponibles</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaPiton;
