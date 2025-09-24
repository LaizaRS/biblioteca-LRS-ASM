import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usuarios from '../json/Usuarios.json'; 

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (email, senha) => {
    
    const usuarioEncontrado = usuarios.find((u) => u.email === email && u.senha === senha);

    if (usuarioEncontrado) {
      setUser(usuarioEncontrado); 
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
