import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineFolder } from "react-icons/hi";
import { GiTreeBranch } from "react-icons/gi";
import { productos } from "../data/productos";
import "./Header.css";

const categorias = [
  "camaleones",
  "pitones-bola",
  "tortugas",
  "lagartos",
  "serpientes",
  "anfibios",
  "artropodos",
  "boas",
  "geckos",
  "mamiferos",
  "aves",
  "terrarios",
  "accesorios",
  "iluminacion",
  "libros",
  "herpetologicos",
  "alimento-vivo",
  "alimento-congelado",
  "alimento-seco",
];

const Header = () => {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [sugerencias, setSugerencias] = useState([]);
  const navigate = useNavigate();
  const refMenu = useRef();

  const toggleModoOscuro = () => {
    setModoOscuro((prev) => {
      const nuevoModo = !prev;
      document.body.classList.toggle("dark-mode", nuevoModo);
      return nuevoModo;
    });
  };

  useEffect(() => {
    const manejarClickFuera = (e) => {
      if (refMenu.current && !refMenu.current.contains(e.target)) {
        setSugerencias([]);
      }
    };
    document.addEventListener("mousedown", manejarClickFuera);
    return () => document.removeEventListener("mousedown", manejarClickFuera);
  }, []);

  const manejarBusqueda = (e) => {
    const texto = e.target.value.toLowerCase();
    setBusqueda(texto);

    if (!texto) {
      setSugerencias([]);
      return;
    }

    const sugerenciasFiltradas = [
      ...categorias
        .filter((cat) => cat.includes(texto))
        .map((cat) => ({ tipo: "categoria", valor: cat })),
      ...productos
        .filter((prod) => prod.nombre.toLowerCase().includes(texto))
        .map((prod) => ({ tipo: "producto", valor: prod })),
    ];

    setSugerencias(sugerenciasFiltradas);
  };

  const manejarSeleccion = (item) => {
    setBusqueda("");
    setSugerencias([]);

    if (item.tipo === "categoria") {
      navigate(`/categoria/${item.valor}`);
    } else if (item.tipo === "producto") {
      navigate(`/categoria/${item.valor.categoria}`);
    }
  };

  return (
    <header className="header">
      <div className="logo-contenedor">
        <img src="/assets/logo.png" alt="Logo Celaya Reptiles" className="logo" />
        <Link to="/" className="titulo">Celaya Reptiles</Link>
      </div>

      <div className="buscador-contenedor" ref={refMenu}>
        <FaSearch className="icono-busqueda" />
        <input
          type="text"
          placeholder="Buscar categoría o producto..."
          className="buscador-input"
          value={busqueda}
          onChange={manejarBusqueda}
        />
        <button className="btn-filtro">Filtros</button>

        {sugerencias.length > 0 && (
          <ul className="menu-sugerencias">
            {sugerencias.map((item, index) => (
              <li
                key={index}
                className="sugerencia"
                onClick={() => manejarSeleccion(item)}
              >
                {item.tipo === "categoria" ? (
                  <HiOutlineFolder className="icono-sugerencia" />
                ) : (
                  <GiTreeBranch className="icono-sugerencia" />
                )}
                <span>
                  {item.tipo === "categoria" ? item.valor : item.valor.nombre}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/tienda">Tienda</Link>
        <Link to="/cursos">Cursos</Link>
        <Link to="/carrito">Carrito</Link>
        <button onClick={toggleModoOscuro} className="btn-modo">
          {modoOscuro ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
