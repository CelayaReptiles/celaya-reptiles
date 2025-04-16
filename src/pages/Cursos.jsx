import React from "react";
import { Link } from "react-router-dom";
import "./Cursos.css";

function Cursos() {
  const cursos = [
    {
      id: 1,
      nombre: "Introducción al mundo de los reptiles",
      descripcion: "Aprende lo básico sobre el manejo, hábitat y alimentación de reptiles.",
      imagen: "https://via.placeholder.com/300x200?text=Curso+Reptiles",
      enlace: "/curso-introduccion",
    },
    {
      id: 2,
      nombre: "Parasitología en reptiles",
      descripcion: "Identificación, prevención y tratamiento de parásitos en reptiles.",
      imagen: "https://via.placeholder.com/300x200?text=Curso+Parasitología",
      enlace: "/curso-parasitologia",
    },
    {
      id: 3,
      nombre: "Medicina en serpientes",
      descripcion: "Explora los fundamentos médicos para cuidar serpientes exóticas.",
      imagen: "https://via.placeholder.com/300x200?text=Curso+Medicina",
      enlace: "/curso-medicina",
    },
  ];

  return (
    <div className="cursos-container">
      <h2>📚 Cursos Disponibles</h2>
      <div className="cursos-grid">
        {cursos.map((curso) => (
          <div key={curso.id} className="curso-card">
            <img src={curso.imagen} alt={curso.nombre} className="curso-img" />
            <h3>{curso.nombre}</h3>
            <p>{curso.descripcion}</p>
            <Link to={curso.enlace} className="curso-btn">
              Ver más
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cursos;
