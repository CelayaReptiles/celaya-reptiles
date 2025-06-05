import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
const CategoriaTortugas = () => {
  const productos = [
    {
      id: 1,
      nombre: "Tortuga de Orejas Rojas",
      precio: 350,
      imagen: "/assets/tortugas.jpg",
    },
    {
      id: 2,
      nombre: "Tortuga Sulcata",
      precio: 2900,
      imagen: "/assets/tortugas.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Tortugas Disponibles</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaTortugas;
