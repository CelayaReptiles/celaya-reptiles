import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Tienda from "./pages/Tienda";
import Carrito from "./pages/Carrito";
import Cursos from "./pages/Cursos";
import CursoIntro from "./pages/CursoIntro";
import CursoParasitologia from "./pages/CursoParasitologia";
import CursoMedicina from "./pages/CursoMedicina";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="logo">🦎 Celaya Reptiles</div>
          <nav className="nav">
            <Link to="/">Inicio</Link>
            <Link to="/tienda">Tienda</Link>
            <Link to="/carrito">Carrito</Link>
            <Link to="/cursos">Cursos</Link>
          </nav>
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/curso-introduccion" element={<CursoIntro />} />
            <Route path="/curso-parasitologia" element={<CursoParasitologia />} />
            <Route path="/curso-medicina" element={<CursoMedicina />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2025 Celaya Reptiles. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
