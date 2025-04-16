import React from "react";
import { useCart } from "../context/CartContext";
import "./Carrito.css";

const Carrito = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useCart();

  const finalizarCompra = async () => {
    try {
      const response = await fetch("/api/crear-preferencia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: carrito.map((item) => ({
            title: item.nombre,
            quantity: 1,
            unit_price: Number(item.precio),
          })),
        }),
      });

      const data = await response.json();
      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        alert("Hubo un error al generar el link de pago.");
      }
    } catch (error) {
      console.error("❌ Error al finalizar compra:", error);
      alert("Ocurrió un error al procesar el pago.");
    }
  };

  return (
    <div className="carrito">
      <h2>🛒 Tu Carrito</h2>

      {carrito.length === 0 ? (
        <p className="vacio">No hay productos en el carrito.</p>
      ) : (
        <div className="carrito-lista">
          {carrito.map((producto, index) => (
            <div className="carrito-item" key={index}>
              <div>
                <h3>{producto.nombre}</h3>
                <p>Precio: ${producto.precio} MXN</p>
              </div>
              <button
                onClick={() => eliminarDelCarrito(index)}
                className="btn eliminar"
              >
                Eliminar
              </button>
            </div>
          ))}

          <div className="carrito-acciones">
            <button className="btn vaciar" onClick={vaciarCarrito}>
              Vaciar Carrito
            </button>
            <button className="btn comprar" onClick={finalizarCompra}>
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
