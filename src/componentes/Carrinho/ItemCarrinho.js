import livros from '../../json/livros.json';
import './ItemCarrinho.css';

const ItemCarrinho = ({ idLivro }) => {
  // procura o livro pelo id
  const livroPeloId = livros.find((livro) => livro.id === idLivro);

  if (!livroPeloId) {
    return <p>Livro não encontrado</p>;
  }

  return (
    <div className="item-estante-carrinho">
      <img className="img-carrinho" src={livroPeloId.link_imagem} alt={livroPeloId.titulo} />

      <div className="informacoes-carrinho">
        <h3 className="nome-estante-carrinho">{livroPeloId.titulo}</h3>
        <div className="valor-e-quantidade">
          <h2 className='valor-carrinho'>R${livroPeloId.preco}</h2>
          <div className="controle-quantidade-carrinho">
            <button className="botao-mais-carrinho"> + </button>
            <p className="quantidade-carrinho">2</p>
            <button className="botao-menos-carrinho"> - </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCarrinho;
