import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
const CategoriaAlimentoVivo = () => {
  const productos = [
    {
      id: 1,
      nombre: "Grillos Medianos",
      precio: 1.5,
      imagen: "/assets/grillos.jpg",
    },
    {
      id: 2,
      nombre: "Zophobas (gusano rey)",
      precio: 2.0,
      imagen: "/assets/zophobas.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Alimento Vivo Disponible</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaAlimentoVivo;
