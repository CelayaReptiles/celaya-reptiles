import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
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
      imagen: "/assets/gecko-leopardo.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Geckos Leopardo Disponibles</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaGeckos;
