import React from "react";
import "../../styles/Categoria.css";

const CategoriaAlimentoSeco = () => {
  const productos = [
    {
      id: 1,
      nombre: "Croquetas para Tortuga",
      precio: 90,
      imagen: "/assets/croquetas-tortuga.jpg",
    },
    {
      id: 2,
      nombre: "Alimento Pellet para Iguanas",
      precio: 110,
      imagen: "/assets/pellets-iguana.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Alimento Seco Disponible</h2>
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

export default CategoriaAlimentoSeco;
