import { useCart } from "../context/CartContext";

function Tienda() {
  const { agregarAlCarrito } = useCart();

  const productos = [
    {
      id: 1,
      nombre: "Gecko Leopardo",
      precio: "850 MXN",
      imagen: "https://via.placeholder.com/200x150?text=Gecko+Leopardo",
    },
    {
      id: 2,
      nombre: "Serpiente del Maíz",
      precio: "1200 MXN",
      imagen: "https://via.placeholder.com/200x150?text=Serpiente+del+Maiz",
    },
    {
      id: 3,
      nombre: "Dragón Barbudo",
      precio: "1800 MXN",
      imagen: "https://via.placeholder.com/200x150?text=Dragon+Barbudo",
    },
  ];

  return (
    <div>
      <h2>Reptiles en Venta</h2>
      <div>
        {productos.map((producto, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <img src={producto.imagen} alt={producto.nombre} width={200} />
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tienda;

  