import { FaCartPlus, FaRegStar, FaStar } from "react-icons/fa";
import "./CardLivros.css";
import { useNavigate } from "react-router-dom";
import { useFavorito } from "../../contexts/Favoritos"; 

const CardLivros = ({ generoSelecionado, autorSelecionado, livros }) => {
  const { favoritos, toggleFavorito } = useFavorito(); 
  const navigate = useNavigate();

  const livrosFiltrados = livros.filter((livro) => {
    return (
      (generoSelecionado === "" || livro.genero.nome === generoSelecionado) &&
      (autorSelecionado === "" || livro.autor.nome === autorSelecionado)
    );
  });

  return (
    <div className="estante-de-livros">
      {livrosFiltrados.map((livro) => {
        const ehFavorito = favoritos.some((fav) => fav.id === livro.id);

        return (
          <div
            key={livro.id}
            className="card-livros"
            onClick={() => navigate(`/produto-aberto/${livro.id}`)}
          >
            <img
              className="img-card-livro"
              src={livro.link_imagem}
              alt={`Capa do livro ${livro.titulo}`}
            />

            <h3 className="titulo-card">{livro.titulo}</h3>

            <div className="display-flex-card-livro">
              <h2 className="preco-card">R$: {livro.preco}</h2>
              <div className="nome-preco">
                <button className="botao-card">
                  <FaCartPlus className="icone-card" />
                </button>

                <button
                  className="botao-card"
                  onClick={(e) => {
                    e.stopPropagation(); // não navega ao clicar no botão
                    toggleFavorito(livro);
                  }}
                >
                  {ehFavorito ? (
                    <FaStar className="icone-card icone-position-absolute" />
                  ) : (
                    <FaRegStar className="icone-card icone-position-absolute" />
                  )}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardLivros;
