import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Foods from "../pages/Foods";
import FoodDetail from "../pages/FoodDetail";
import NotFound from "../pages/NotFound";

// Habilitar roteamento no seu site React

// 1. Importar o BrowserRouter e envelopar toda a aplicação com ele (consultar index.js linhas 3 e 8)

function App() {
  // 2. Definir rotas (sempre envelopadas pelo <Routes>)
  return (
    <div>
      {/* Quando quiser que um componente seja renderizado em TODAS as páginas, basta não colocá-lo em nenhum <Route> */}
      <Navbar />
      <div className="container mt-5">
        <Routes>
          {/* Quando passamos `*` para o path, essa rota será ativada em qualquer rota que não exista em seu site. Isso é útil para exibir páginas de erro como "404 - Não Encontrado." */}
          <Route path="*" element={<NotFound />} />
          {/* Todo componente <Route> vai precisar receber 2 props: a `path` que determina qual rota da URL deve exibir o componente dessa página, e a `element` que determina qual é o componente dessa página */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/comidas" element={<Foods />} />
          <Route path="/comidas/:id" element={<FoodDetail />} />
          {/* LEMBRETE: Ver subrotas */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
