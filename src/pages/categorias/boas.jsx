import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
const CategoriaBoas = () => {
  const productos = [
    {
      id: 1,
      nombre: "Boa Imperator",
      precio: 3200,
      imagen: "/assets/boa.jpg",
    },
    {
      id: 2,
      nombre: "Boa Albina",
      precio: 4200,
      imagen: "/assets/boa-albina.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Boas Disponibles</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaBoas;
