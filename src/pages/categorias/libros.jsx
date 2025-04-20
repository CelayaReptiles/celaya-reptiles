import React from "react";
import "../../styles/Categoria.css";

const CategoriaLibros = () => {
  const productos = [
    {
      id: 1,
      nombre: "Guía de Reptiles Exóticos",
      precio: 390,
      imagen: "/assets/libro-reptiles.jpg",
    },
    {
      id: 2,
      nombre: "Atlas de Serpientes",
      precio: 450,
      imagen: "/assets/libro-serpientes.jpg",
    },
  ];

  return (
    <div className="categoria">
      <h2>Libros Disponibles</h2>
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

export default CategoriaLibros;
