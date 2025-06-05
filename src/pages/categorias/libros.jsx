import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
const CategoriaLibros = () => {
  const productos = [
    {
      id: 1,
      nombre: "Guía de Reptiles Exóticos",
      precio: 390,
      imagen: "/assets/libro-reptiles.jpg",
    },
    {
      id: 2,
      nombre: "Atlas de Serpientes",
      precio: 450,
      imagen: "/assets/libro-serpientes.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Libros Disponibles</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaLibros;
