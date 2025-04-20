import React from "react";
import { Link } from "react-router-dom";
import "./Cursos.css";

const Cursos = () => {
  const cursos = [
    {
      id: 1,
      nombre: "Introducción al mundo de los reptiles",
      descripcion: "Aprende los conceptos básicos sobre el manejo y biología de los reptiles.",
      imagen: "/assets/curso-reptiles.jpg",
      link: "/cursos/introduccion",
    },
    {
      id: 2,
      nombre: "Parasitología en reptiles",
      descripcion: "Conoce los parásitos más comunes, diagnóstico y tratamiento.",
      imagen: "/assets/curso-parasitos.jpg",
      link: "/cursos/parasitologia",
    },
    {
      id: 3,
      nombre: "Medicina en serpientes",
      descripcion: "Curso enfocado en enfermedades, tratamiento y cuidados médicos en serpientes.",
      imagen: "/assets/curso-serpientes.jpg",
      link: "/cursos/medicina",
    },
  ];

  return (
    <div className="cursos">
      <h2>Cursos Disponibles</h2>
      <div className="cursos-grid">
        {cursos.map((curso) => (
          <div key={curso.id} className="curso-card">
            <img src={curso.imagen} alt={curso.nombre} />
            <h3>{curso.nombre}</h3>
            <p>{curso.descripcion}</p>
            <Link to={curso.link} className="btn-ver-mas">Ver más</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cursos;
