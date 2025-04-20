import React from "react";
import "../../styles/Categoria.css";

const CategoriaCamaleones = () => {
  const productos = [
    {
      id: 1,
      nombre: "Camaleón Velado",
      precio: 1800,
      imagen: "/assets/camaleon-velado.jpg",
    },
    {
      id: 2,
      nombre: "Camaleón Pantera",
      precio: 3200,
      imagen: "/assets/camaleon-pantera.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Camaleones Disponibles</h2>
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

export default CategoriaCamaleones;
