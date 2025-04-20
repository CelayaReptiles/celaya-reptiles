import React from "react";
import "../../styles/Categoria.css";

const CategoriaAlimentoCongelado = () => {
  const productos = [
    {
      id: 1,
      nombre: "Ratón Rosa Congelado",
      precio: 25,
      imagen: "/assets/raton-congelado.jpg",
    },
    {
      id: 2,
      nombre: "Rata Mediana Congelada",
      precio: 45,
      imagen: "/assets/rata-congelada.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Alimento Congelado Disponible</h2>
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

export default CategoriaAlimentoCongelado;
