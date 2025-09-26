import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import ConfiguracoesUsuario from './componentes/ConfiguracoesUsuario/ConfiguracoesUsuario.js';
import LayoutTelaPrincipal from './componentes/LayoutTelaPrincipal/LayoutTelaPrincipal.js';
import ListaDeDesejos from './componentes/ListaDeDesejos/ListaDeDesejos.js';
import LogIn from './componentes/Log-in/Log-in.js';
import PaginaCadastro from './componentes/PaginaCadastro/PaginaCadastro.js';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import ProdutoAberto from './componentes/ProdutoAberto/ProdutoAberto.js';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes className="app">
          <Route path="/" element={<LayoutTelaPrincipal />}></Route>
          <Route
            path="/lista-de-desejos"
            element={
              <ProtectedRoute>
                <ListaDeDesejos />{' '}
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/meu-perfil"
            element={
              <ProtectedRoute>
                <ConfiguracoesUsuario />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/cadastro-usuario" element={<PaginaCadastro />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/produto-aberto/:id" element={<ProdutoAberto />}></Route>
          <Route path="*" element={<div>Página não encontrada</div>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
