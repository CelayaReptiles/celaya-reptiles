import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Tienda from "./pages/Tienda";
import Cursos from "./pages/Cursos";
import Carrito from "./pages/Carrito";
import CursoIntro from "./pages/CursoIntro";
import CursoParasitologia from "./pages/CursoParasitologia";
import CursoMedicina from "./pages/CursoMedicina";

// Categorías
import CategoriaPiton from "./pages/categorias/piton";
import CategoriaTortugas from "./pages/categorias/tortugas";
import CategoriaCamaleones from "./pages/categorias/camaleones";
import CategoriaSerpientes from "./pages/categorias/serpientes";
import CategoriaLagartos from "./pages/categorias/lagartos";
import CategoriaAnfibios from "./pages/categorias/anfibios";
import CategoriaArtropodos from "./pages/categorias/artropodos";
import CategoriaBoas from "./pages/categorias/boas";
import CategoriaGeckos from "./pages/categorias/geckos-leopardo";
import CategoriaMamiferos from "./pages/categorias/pequenos-mamiferos";
import CategoriaAves from "./pages/categorias/aves";
import CategoriaTerrarios from "./pages/categorias/terrarios";
import CategoriaAccesorios from "./pages/categorias/accesorios";
import CategoriaIluminacion from "./pages/categorias/iluminacion";
import CategoriaLibros from "./pages/categorias/libros";
import CategoriaHerpetologicos from "./pages/categorias/articulos-herpetologicos";
import CategoriaAlimentoVivo from "./pages/categorias/alimento-vivo";
import CategoriaAlimentoCongelado from "./pages/categorias/alimento-descongelado";
import CategoriaAlimentoSeco from "./pages/categorias/alimento-seco";
import CategoriaTodos from "./pages/categorias/todos";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/curso-intro" element={<CursoIntro />} />
          <Route path="/curso-parasitologia" element={<CursoParasitologia />} />
          <Route path="/curso-medicina" element={<CursoMedicina />} />

          {/* Rutas de categorías */}
          <Route path="/categoria/pitones-bola" element={<CategoriaPiton />} />
          <Route path="/categoria/tortugas" element={<CategoriaTortugas />} />
          <Route path="/categoria/camaleones" element={<CategoriaCamaleones />} />
          <Route path="/categoria/serpientes" element={<CategoriaSerpientes />} />
          <Route path="/categoria/lagartos" element={<CategoriaLagartos />} />
          <Route path="/categoria/anfibios" element={<CategoriaAnfibios />} />
          <Route path="/categoria/artropodos" element={<CategoriaArtropodos />} />
          <Route path="/categoria/boas" element={<CategoriaBoas />} />
          <Route path="/categoria/geckos" element={<CategoriaGeckos />} />
          <Route path="/categoria/mamiferos" element={<CategoriaMamiferos />} />
          <Route path="/categoria/aves" element={<CategoriaAves />} />
          <Route path="/categoria/terrarios" element={<CategoriaTerrarios />} />
          <Route path="/categoria/accesorios" element={<CategoriaAccesorios />} />
          <Route path="/categoria/iluminacion" element={<CategoriaIluminacion />} />
          <Route path="/categoria/libros" element={<CategoriaLibros />} />
          <Route path="/categoria/herpetologicos" element={<CategoriaHerpetologicos />} />
          <Route path="/categoria/alimento-vivo" element={<CategoriaAlimentoVivo />} />
          <Route path="/categoria/alimento-congelado" element={<CategoriaAlimentoCongelado />} />
          <Route path="/categoria/alimento-seco" element={<CategoriaAlimentoSeco />} />
          <Route path="/categoria/todos" element={<CategoriaTodos />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
