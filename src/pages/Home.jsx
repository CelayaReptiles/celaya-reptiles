import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Celaya Reptiles</h1>
          <p>Especialistas en reptiles, exóticos y cursos online 🦎</p>
          <Link to="/tienda" className="hero-button">
            Ver Tienda
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>🐍 Reptiles en Venta</h3>
          <p>Gran variedad de reptiles saludables y certificados.</p>
        </div>
        <div className="feature-card">
          <h3>📚 Cursos Online</h3>
          <p>Capacítate con nuestros cursos 100% en línea.</p>
        </div>
        <div className="feature-card">
          <h3>🎓 Asesorías Personalizadas</h3>
          <p>Consulta con expertos en animales exóticos.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
