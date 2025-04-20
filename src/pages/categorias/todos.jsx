import React from "react";
import "../../styles/Categoria.css";

const todosLosProductos = [
  {
    id: 1,
    nombre: "Camaleón Velado",
    precio: 1800,
    imagen: "/assets/camaleon-velado.jpg",
  },
  {
    id: 2,
    nombre: "Gecko Leopardo High Yellow",
    precio: 950,
    imagen: "/assets/gecko-leopardo.jpg",
  },
  {
    id: 3,
    nombre: "Pitón Bola Normal",
    precio: 2200,
    imagen: "/assets/piton-bola.jpg",
  },
  {
    id: 4,
    nombre: "Dragón Barbudo",
    precio: 2500,
    imagen: "/assets/dragon-barbudo.jpg",
  },
  {
    id: 5,
    nombre: "Tortuga Sulcata",
    precio: 2900,
    imagen: "/assets/tortuga-sulcata.jpg",
  },
  {
    id: 6,
    nombre: "Serpiente del Maíz",
    precio: 1800,
    imagen: "/assets/serpiente-maiz.jpg",
  },
];

const CategoriaTodos = () => {
  return (
    <div className="categoria">
      <h2>Todos los Productos</h2>
      <div className="productos-grid">
        {todosLosProductos.map((item) => (
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

export default CategoriaTodos;
