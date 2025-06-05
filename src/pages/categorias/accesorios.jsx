import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
const CategoriaAccesorios = () => {
  const productos = [
    {
      id: 1,
      nombre: "Cueva de Resina",
      precio: 220,
      imagen: "/assets/cueva-resina.jpg",
    },
    {
      id: 2,
      nombre: "Plato de Agua Decorativo",
      precio: 180,
      imagen: "/assets/plato-decorativo.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Accesorios Disponibles</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaAccesorios;
