import livros from "../../json/livros.json";
import NavBar from "../NavBar/NavBar";
import "./ProdutoAberto.css";
import { useFavorito } from "../../contexts/Favoritos";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ProdutoAberto = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const livroById = livros.find((livro) => livro.id === Number(id));

  const { favoritos, toggleFavorito } = useFavorito();

  if (!livroById) {
    return <p>Livro não encontrado!</p>;
  }

  const isFavorito = favoritos.some((fav) => fav.id === livroById.id);

  return (
    <div className="centralizando">
      <NavBar />
      <div className="produto-aberto">
        <img
          className="imagem-produto-aberto"
          src={livroById.link_imagem}
          alt={livroById.titulo}
        />
        <div className="direita-produtos-abertos">
          <h1>{livroById.titulo}</h1>
          <div className="display-flex-produtos-abertos">
            <h2>R$ {livroById.preco}</h2>
            <p className="color-desbotada">
              Disponível em estoque: {livroById.estoque}
            </p>
          </div>
          <p>Escrito por: {livroById.autor.nome}</p>
          <p>Gênero: {livroById.genero.nome}</p>
          <p>Descrição: {livroById.descricao}</p>
          <div className="display-flex-produtos-abertos">
            <button className="botoes-comprar-favoritos">
              Adicionar ao carrinho
            </button>

            <button
              className="botoes-comprar-favoritos"
              onClick={() => toggleFavorito(livroById)}
              disabled={!user} 
            >
              {isFavorito
                ? "Remover dos favoritos"
                : "Adicionar aos favoritos"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdutoAberto;
