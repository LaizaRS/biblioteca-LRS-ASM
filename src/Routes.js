import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import ConfiguracoesUsuario from './componentes/ConfiguracoesUsuario/ConfiguracoesUsuario.js';
import LayoutTelaPrincipal from './componentes/LayoutTelaPrincipal/LayoutTelaPrincipal.js';
import ListaDeDesejos from './componentes/ListaDeDesejos/ListaDeDesejos.js';
import LogIn from './componentes/Log-in/Log-in.js';
import PaginaCadastro from './componentes/PaginaCadastro/PaginaCadastro.js';

function App() {
  return (
    <BrowserRouter>
      <Routes className="app">
        <Route path="/" element={<LayoutTelaPrincipal />}></Route>
        <Route path="/lista-de-desejos" element={<ListaDeDesejos />}></Route>
        <Route path="/meu-perfil" element={<ConfiguracoesUsuario />}></Route>
        <Route path="/cadastro-usuario" element={<PaginaCadastro />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
