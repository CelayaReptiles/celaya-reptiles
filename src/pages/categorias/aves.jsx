import React from "react";
import "../../styles/Categoria.css";

const CategoriaAves = () => {
  const productos = [
    {
      id: 1,
      nombre: "Ninfa Lutina",
      precio: 1200,
      imagen: "/assets/ninfa.jpg",
    },
    {
      id: 2,
      nombre: "Cotorro Australiano",
      precio: 450,
      imagen: "/assets/cotorro.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Aves Disponibles</h2>
      <div className="productos-grid">
        {productos.map((item) => (
          <div key={item.id} className="producto-card">
            <img src={item.imagen} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p>${item.precio} MXN</p>
            <button>Añadir al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriaAves;
