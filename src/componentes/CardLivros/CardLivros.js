import { FaCartPlus, FaRegStar, FaStar } from 'react-icons/fa';
import './CardLivros.css';

import { useNavigate } from 'react-router-dom';

const CardLivros = ({ generoSelecionado, autorSelecionado, livros }) => {
  const livrosFiltrados = livros.filter((livro) => {
    return (
      (generoSelecionado === '' || livro.genero.nome === generoSelecionado) &&
      (autorSelecionado === '' || livro.autor.nome === autorSelecionado)
    );
  });
  const navigate = useNavigate();

  return (
    <div className="estante-de-livros">
      {livrosFiltrados.map((livro) => (
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
              <button className="botao-card">
                <FaRegStar className="icone-card icone-position-absolute" />
                <FaStar className="icone-card icone-position-absolute" />
              </button>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default CardLivros;
