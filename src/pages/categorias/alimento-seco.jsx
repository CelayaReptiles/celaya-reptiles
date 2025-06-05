import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
const CategoriaAlimentoSeco = () => {
  const productos = [
    {
      id: 1,
      nombre: "Croquetas para Tortuga",
      precio: 90,
      imagen: "/assets/croquetas-tortuga.jpg",
    },
    {
      id: 2,
      nombre: "Alimento Pellet para Iguanas",
      precio: 110,
      imagen: "/assets/pellets-iguana.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Alimento Seco Disponible</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaAlimentoSeco;
