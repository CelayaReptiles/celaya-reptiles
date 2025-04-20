import React from "react";
import "../../styles/Categoria.css";

const CategoriaTerrarios = () => {
  const productos = [
    {
      id: 1,
      nombre: "Terrario de Vidrio 60x45x45",
      precio: 2100,
      imagen: "/assets/terrario.jpg",
    },
    {
      id: 2,
      nombre: "Jaula para Reptiles Pequeños",
      precio: 950,
      imagen: "/assets/jaula-reptiles.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Terrarios y Jaulas Disponibles</h2>
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

export default CategoriaTerrarios;
