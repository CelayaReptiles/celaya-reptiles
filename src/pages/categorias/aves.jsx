import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
const CategoriaAves = () => {
  const productos = [
    {
      id: 1,
      nombre: "Ninfa Lutina",
      precio: 1200,
      imagen: "/assets/ninfa.jpg",
    },
    {
      id: 2,
      nombre: "Cotorro Australiano",
      precio: 450,
      imagen: "/assets/cotorro.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Aves Disponibles</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaAves;
