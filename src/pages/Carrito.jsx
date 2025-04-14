import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Carrito = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CartContext);

  return (
    <div>
      <h2>🛒 Tu Carrito</h2>

      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {carrito.map((producto, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius: '10px', background: 'white' }}>
              <h3>{producto.nombre}</h3>
              <p>Precio: ${producto.precio}</p>
              <button
                onClick={() => eliminarDelCarrito(index)}
                style={{
                  backgroundColor: '#e67e22',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Eliminar
              </button>
            </div>
          ))}

          {/* Botón para vaciar el carrito */}
          <button
            onClick={vaciarCarrito}
            style={{
              marginTop: '1rem',
              padding: '0.7rem 1.5rem',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default Carrito;
