import React from "react";
import "../../styles/Categoria.css";

import ProductCard from "../../components/ProductCard";
const CategoriaIluminacion = () => {
  const productos = [
    {
      id: 1,
      nombre: "Foco UVB 10.0",
      precio: 290,
      imagen: "/assets/foco-uvb.jpg",
    },
    {
      id: 2,
      nombre: "Lampara de Calor Cerámica",
      precio: 330,
      imagen: "/assets/lampara-ceramica.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Iluminación Disponible</h2>
      <div className="productos-grid">
        {productos.map((item) => (<ProductCard key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default CategoriaIluminacion;
