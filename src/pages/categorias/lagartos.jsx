import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
const CategoriaLagartos = () => {
  const productos = [
    {
      id: 1,
      nombre: "Dragón Barbudo",
      precio: 2500,
      imagen: "/assets/dragon-barbudo.jpg",
    },
    {
      id: 2,
      nombre: "Uromastyx",
      precio: 2800,
      imagen: "/assets/lagartos.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Lagartos Disponibles</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaLagartos;
