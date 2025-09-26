import { createContext, useContext, useState } from "react";

const FavoritoContext = createContext();

export const useFavorito = () => useContext(FavoritoContext);

export const FavoritoProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (livro) => {
    const jaFavorito = favoritos.some((fav) => fav.id === livro.id);

    if (jaFavorito) {
      setFavoritos(favoritos.filter((fav) => fav.id !== livro.id));
    } else {
      setFavoritos([...favoritos, livro]);
    }
  };

  return (
    <FavoritoContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritoContext.Provider>
  );
};
