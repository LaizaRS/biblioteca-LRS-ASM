import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import ConfiguracoesUsuario from './componentes/ConfiguracoesUsuario/ConfiguracoesUsuario.js';
import LayoutTelaPrincipal from './componentes/LayoutTelaPrincipal/LayoutTelaPrincipal.js';
import ListaDeDesejos from './componentes/ListaDeDesejos/ListaDeDesejos.js';
import LogIn from './componentes/Log-in/Log-in.js';
import PaginaCadastro from './componentes/PaginaCadastro/PaginaCadastro.js';
import { AuthProvider } from './contexts/AuthContext';
import { FavoritoProvider } from './contexts/Favoritos.js';

import ProdutoAberto from './componentes/ProdutoAberto/ProdutoAberto.js';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <FavoritoProvider>
          <Routes className="app">
            <Route path="/" element={<LayoutTelaPrincipal />} />

            <Route
              path="/lista-de-desejos"
              element={
                <ProtectedRoute>
                  <ListaDeDesejos />
                </ProtectedRoute>
              }
            />

            <Route path="/produto-aberto/:id" element={<ProdutoAberto />} />

            <Route
              path="/meu-perfil"
              element={
                <ProtectedRoute>
                  <ConfiguracoesUsuario />
                </ProtectedRoute>
              }
            />

            <Route path="/cadastro-usuario" element={<PaginaCadastro />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="*" element={<div>Página não encontrada</div>} />
          </Routes>
        </FavoritoProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
