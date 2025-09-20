import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import LayoutTelaPrincipal from './componentes/LayoutTelaPrincipal/LayoutTelaPrincipal.js';
import ListaDeDesejos from './componentes/ListaDeDesejos/ListaDeDesejos.js';
import ConfiguracoesUsuario from './componentes/ConfiguracoesUsuario/ConfiguracoesUsuario.js';
import PaginaCadastro from './componentes/PaginaCadastro/PaginaCadastro.js';
import LogIn from './componentes/Log-in/Log-in.js';

function App() {
  return (
    <BrowserRouter>
      <Routes className="app">
        <Route path="/" element={<LayoutTelaPrincipal />}></Route>
        <Route path="/ListaDeDesejos" element={<ListaDeDesejos />}></Route>
        <Route path="/ConfiguracoesUsuario" element={<ConfiguracoesUsuario />}></Route>
        <Route path="/PaginaCadastro" element={<PaginaCadastro />}></Route>
        <Route path="/LogIn" element={<LogIn />}></Route>
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
