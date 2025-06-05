import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ item }) => {
  const { agregarAlCarrito } = useCart();

  return (
    <div className="producto-card">
      <img src={item.imagen} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>${item.precio} MXN</p>
      <button onClick={() => agregarAlCarrito(item)}>Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;
