import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
const CategoriaTerrarios = () => {
  const productos = [
    {
      id: 1,
      nombre: "Terrario de Vidrio 60x45x45",
      precio: 2100,
      imagen: "/assets/terrarios-jaulas.jpg",
    },
    {
      id: 2,
      nombre: "Jaula para Reptiles Pequeños",
      precio: 950,
      imagen: "/assets/terrarios-jaulas.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Terrarios y Jaulas Disponibles</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaTerrarios;
