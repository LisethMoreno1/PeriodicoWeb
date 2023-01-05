import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Barra/navbar";
import News from "./components/Noticias/news";
import Encabezado from "./components/Noticias/encabezado/encabezado";
import Notas from "./components/Noticias/nota/notas";
import Art from "./components/Noticias/Artistas/Art";
import Login from "./components/login/login";
import Registra from "./components/login/registra";
import CrearNew from "./components/Crearnoticias/crearNew";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/news" element={<News />} />
        <Route path="/Encabezado" element={<Encabezado />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/Artistas" element={<Art />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registra" element={<Registra />} />
        <Route path="/CrearNew" element={<CrearNew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
