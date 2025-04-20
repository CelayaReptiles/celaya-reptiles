import React from "react";
import "../../styles/Categoria.css";

const CategoriaTortugas = () => {
  const productos = [
    {
      id: 1,
      nombre: "Tortuga de Orejas Rojas",
      precio: 350,
      imagen: "/assets/tortuga-orejas-rojas.jpg",
    },
    {
      id: 2,
      nombre: "Tortuga Sulcata",
      precio: 2900,
      imagen: "/assets/tortuga-sulcata.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Tortugas Disponibles</h2>
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

export default CategoriaTortugas;
