import React from "react";
import "../../styles/Categoria.css";

const CategoriaBoas = () => {
  const productos = [
    {
      id: 1,
      nombre: "Boa Imperator",
      precio: 3200,
      imagen: "/assets/boa.jpg",
    },
    {
      id: 2,
      nombre: "Boa Albina",
      precio: 4200,
      imagen: "/assets/boa-albina.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Boas Disponibles</h2>
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

export default CategoriaBoas;
