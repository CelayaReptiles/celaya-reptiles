// src/pages/Cursos.jsx

function Cursos() {
    const cursos = [
      {
        id: 1,
        titulo: "Manejo Básico de Reptiles",
        descripcion: "Aprende a cuidar geckos, dragones barbudos y serpientes.",
        precio: "MXN $499",
        enlace: "https://wa.me/521xxxxxxxxxx?text=Hola,%20me%20interesa%20el%20curso%20de%20manejo%20de%20reptiles",
      },
      {
        id: 2,
        titulo: "Cría Responsable de Reptiles",
        descripcion: "Curso especializado en incubación, genética y venta responsable.",
        precio: "MXN $699",
        enlace: "https://wa.me/521xxxxxxxxxx?text=Hola,%20quiero%20información%20del%20curso%20de%20cría%20de%20reptiles",
      },
    ];
  
    return (
      <div>
        <h2>📚 Cursos Online</h2>
        {cursos.map((curso) => (
          <div key={curso.id} style={{ marginBottom: "1.5rem" }}>
            <h3>{curso.titulo}</h3>
            <p>{curso.descripcion}</p>
            <p><strong>{curso.precio}</strong></p>
            <a href={curso.enlace} target="_blank" rel="noopener noreferrer">
              Inscribirme por WhatsApp
            </a>
          </div>
        ))}
      </div>
    );
  }
  
  export default Cursos;
  