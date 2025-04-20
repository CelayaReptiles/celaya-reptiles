import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-texto">
          <h1>Bienvenido a Celaya Reptiles</h1>
          <p>Descubre reptiles extraordinarios y aprende con nuestros cursos especializados.</p>
          <div className="hero-botones">
            <Link to="/tienda" className="boton-primario">Ver Reptiles</Link>
            <Link to="/cursos" className="boton-secundario">Explorar Cursos</Link>
          </div>
        </div>
        <img src="/assets/dragon-barbudo.jpg" alt="Reptil destacado" className="hero-imagen" />
      </section>

      <section className="destacados">
        <h2>Explora nuestras secciones</h2>
        <div className="destacados-grid">
          <Link to="/tienda" className="destacado-card">
            <img src="/assets/gecko-leopardo.jpg" alt="Tienda" />
            <h3>Tienda</h3>
            <p>Reptiles disponibles y productos exclusivos.</p>
          </Link>
          <Link to="/cursos" className="destacado-card">
            <img src="/assets/curso-reptiles.jpg" alt="Cursos" />
            <h3>Cursos</h3>
            <p>Aprende con contenido especializado en reptiles.</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
