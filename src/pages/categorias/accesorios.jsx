import React from "react";
import "../../styles/Categoria.css";

const CategoriaAccesorios = () => {
  const productos = [
    {
      id: 1,
      nombre: "Cueva de Resina",
      precio: 220,
      imagen: "/assets/cueva-resina.jpg",
    },
    {
      id: 2,
      nombre: "Plato de Agua Decorativo",
      precio: 180,
      imagen: "/assets/plato-decorativo.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Accesorios Disponibles</h2>
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

export default CategoriaAccesorios;
