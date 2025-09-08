import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
const CategoriaArtropodos = () => {
  const productos = [
    {
      id: 1,
      nombre: "Tarántula Rosa Chilena",
      precio: 450,
      imagen: "/assets/artropodos.jpg",
    },
    {
      id: 2,
      nombre: "Escorpión Emperador",
      precio: 600,
      imagen: "/assets/artropodos.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Artrópodos Disponibles</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaArtropodos;
