import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
const CategoriaAlimentoCongelado = () => {
  const productos = [
    {
      id: 1,
      nombre: "Ratón Rosa Congelado",
      precio: 25,
      imagen: "/assets/raton-congelado.jpg",
    },
    {
      id: 2,
      nombre: "Rata Mediana Congelada",
      precio: 45,
      imagen: "/assets/rata-congelada.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Alimento Congelado Disponible</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaAlimentoCongelado;
