import React from "react";
import "../../styles/Categoria.css";

const CategoriaLagartos = () => {
  const productos = [
    {
      id: 1,
      nombre: "Dragón Barbudo",
      precio: 2500,
      imagen: "/assets/dragon-barbudo.jpg",
    },
    {
      id: 2,
      nombre: "Uromastyx",
      precio: 2800,
      imagen: "/assets/uromastyx.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Lagartos Disponibles</h2>
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

export default CategoriaLagartos;
