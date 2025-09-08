import React from "react";
import "../../styles/Categoria.css";
import ProductCard from "../../components/ProductCard";

const todosLosProductos = [
  {
    id: 1,
    nombre: "Camaleón Velado",
    precio: 1800,
    imagen: "/assets/camaleones.jpg",
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
    imagen: "/assets/pitones-bola.jpg",
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
    imagen: "/assets/tortugas.jpg",
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
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoriaTodos;
