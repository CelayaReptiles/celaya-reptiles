import React from "react";
import { Link } from "react-router-dom";
import "../styles/Tienda.css";
import { useSearch } from "../context/SearchContext";

const categorias = [
  { nombre: "Todos los Productos", imagen: "todos-productos.jpg", ruta: "/categoria/todos" },
  { nombre: "Camaleones", imagen: "camaleones.jpg", ruta: "/categoria/camaleones" },
  { nombre: "Pitones Bola", imagen: "pitones-bola.jpg", ruta: "/categoria/pitones-bola" },
  { nombre: "Tortugas (terrestres y subacuáticas)", imagen: "tortugas.jpg", ruta: "/categoria/tortugas" },
  { nombre: "Lagartos", imagen: "lagartos.jpg", ruta: "/categoria/lagartos" },
  { nombre: "Serpientes", imagen: "serpientes.jpg", ruta: "/categoria/serpientes" },
  { nombre: "Anfibios", imagen: "anfibios.jpg", ruta: "/categoria/anfibios" },
  { nombre: "Artrópodos", imagen: "artropodos.jpg", ruta: "/categoria/artropodos" },
  { nombre: "Boas", imagen: "boas.jpg", ruta: "/categoria/boas" },
  { nombre: "Geckos Leopardo", imagen: "geckos-leopardo.jpg", ruta: "/categoria/geckos" },
  { nombre: "Pequeños Mamíferos", imagen: "pequenos-mamiferos.jpg", ruta: "/categoria/mamiferos" },
  { nombre: "Aves", imagen: "aves.jpg", ruta: "/categoria/aves" },
  { nombre: "Terrarios y Jaulas", imagen: "terrarios-jaulas.jpg", ruta: "/categoria/terrarios" },
  { nombre: "Accesorios", imagen: "accesorios.jpg", ruta: "/categoria/accesorios" },
  { nombre: "Iluminación", imagen: "iluminacion.jpg", ruta: "/categoria/iluminacion" },
  { nombre: "Libros", imagen: "libros.jpg", ruta: "/categoria/libros" },
  { nombre: "Artículos Herpetológicos", imagen: "articulos-herpetologicos.jpg", ruta: "/categoria/herpetologicos" },
  { nombre: "Alimento Vivo", imagen: "alimento-vivo.jpg", ruta: "/categoria/alimento-vivo" },
  { nombre: "Alimento Congelado", imagen: "alimento-congelado.jpg", ruta: "/categoria/alimento-congelado" },
  { nombre: "Alimento Seco", imagen: "alimento-seco.jpg", ruta: "/categoria/alimento-seco" },
];

function Tienda() {
  const { terminoBusqueda } = useSearch();

  const categoriasFiltradas = categorias.filter((categoria) =>
    categoria.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  return (
    <div className="tienda">
      <h2>Categorías de la Tienda</h2>
      <div className="categorias-grid">
        {categoriasFiltradas.map((categoria, index) => (
          <Link to={categoria.ruta} key={index} className="categoria-link">
            <div className="categoria-card">
              <img src={`/assets/${categoria.imagen}`} alt={categoria.nombre} />
              <h3>{categoria.nombre}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tienda;
