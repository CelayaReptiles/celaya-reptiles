import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
const CategoriaCamaleones = () => {
  const productos = [
    {
      id: 1,
      nombre: "Camaleón Velado",
      precio: 1800,
      imagen: "/assets/camaleones.jpg",
    },
    {
      id: 2,
      nombre: "Camaleón Pantera",
      precio: 3200,
      imagen: "/assets/camaleones.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Camaleones Disponibles</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaCamaleones;
