import React from "react";
import "../../styles/Categoria.css";

const CategoriaAnfibios = () => {
  const productos = [
    {
      id: 1,
      nombre: "Rana Pacman",
      precio: 950,
      imagen: "/assets/rana-pacman.jpg",
    },
    {
      id: 2,
      nombre: "Rana Arborícola",
      precio: 870,
      imagen: "/assets/rana-arboricola.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Anfibios Disponibles</h2>
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

export default CategoriaAnfibios;
