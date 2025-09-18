import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import LayoutTelaPrincipal from "./componentes/LayoutTelaPrincipal/LayoutTelaPrincipal.js";
import ListaDeDesejos from "./componentes/ListaDeDesejos/ListaDeDesejos.js";
import ConfiguracoesUsuario from "./componentes/ConfiguracoesUsuario/ConfiguracoesUsuario.js";

function App() {
  return (
    <BrowserRouter>
      <Routes className="app">
        <Route path="/" element={<LayoutTelaPrincipal />}></Route>
        <Route path="/ListaDeDesejos" element={<ListaDeDesejos />}></Route>
        <Route
          path="/ConfiguracoesUsuario"
          element={<ConfiguracoesUsuario />}
        ></Route>
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
