import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
const CategoriaAnfibios = () => {
  const productos = [
    {
      id: 1,
      nombre: "Rana Pacman",
      precio: 950,
      imagen: "/assets/rana-pacman.jpg",
    },
    {
      id: 2,
      nombre: "Rana Arborícola",
      precio: 870,
      imagen: "/assets/rana-arboricola.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Anfibios Disponibles</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaAnfibios;
