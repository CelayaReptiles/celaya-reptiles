import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
const CategoriaHerpetologicos = () => {
  const productos = [
    {
      id: 1,
      nombre: "Pinzas para Alimentación",
      precio: 75,
      imagen: "/assets/articulos-herpetologicos.jpg",
    },
    {
      id: 2,
      nombre: "Caja de Transporte Plástica",
      precio: 160,
      imagen: "/assets/articulos-herpetologicos.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Artículos Herpetológicos Disponibles</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaHerpetologicos;
