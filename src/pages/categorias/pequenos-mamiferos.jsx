import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
const CategoriaPequenosMamiferos = () => {
  const productos = [
    {
      id: 1,
      nombre: "Erizo Africano",
      precio: 1500,
      imagen: "/assets/pequenos-mamiferos.jpg",
    },
    {
      id: 2,
      nombre: "Conejo Mini Rex",
      precio: 950,
      imagen: "/assets/pequenos-mamiferos.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Pequeños Mamíferos Disponibles</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaPequenosMamiferos;
