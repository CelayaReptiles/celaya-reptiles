import React from "react";
import "../../styles/Categoria.css";

const CategoriaAlimentoVivo = () => {
  const productos = [
    {
      id: 1,
      nombre: "Grillos Medianos",
      precio: 1.5,
      imagen: "/assets/grillos.jpg",
    },
    {
      id: 2,
      nombre: "Zophobas (gusano rey)",
      precio: 2.0,
      imagen: "/assets/zophobas.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Alimento Vivo Disponible</h2>
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

export default CategoriaAlimentoVivo;
