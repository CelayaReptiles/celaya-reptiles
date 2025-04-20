import React from "react";
import "./CursoDetalle.css";

const CursoIntro = () => {
  return (
    <div className="curso-detalle">
      <h2>Introducción al mundo de los reptiles</h2>
      <img src="/assets/curso-reptiles.jpg" alt="Curso Introducción a los reptiles" />
      <p>
        Aprende los conceptos fundamentales sobre reptiles: su biología, tipos, hábitats y cuidados básicos.
        Ideal para principiantes y amantes de los animales exóticos que quieren iniciar con el pie derecho.
      </p>
    </div>
  );
};

export default CursoIntro;
