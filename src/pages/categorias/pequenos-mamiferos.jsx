import React from "react";
import "../../styles/Categoria.css";

const CategoriaPequenosMamiferos = () => {
  const productos = [
    {
      id: 1,
      nombre: "Erizo Africano",
      precio: 1500,
      imagen: "/assets/erizo.jpg",
    },
    {
      id: 2,
      nombre: "Conejo Mini Rex",
      precio: 950,
      imagen: "/assets/conejo.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Pequeños Mamíferos Disponibles</h2>
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

export default CategoriaPequenosMamiferos;
