import { useCart } from "../context/CartContext";

function Carrito() {
  const { carrito, eliminarDelCarrito } = useCart();

  return (
    <div>
      <h2>🛒 Carrito de compras</h2>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {carrito.map((producto, index) => (
            <li key={index} style={{ marginBottom: "1rem" }}>
              <strong>{producto.nombre}</strong> - {producto.precio}
              <br />
              <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Carrito;
