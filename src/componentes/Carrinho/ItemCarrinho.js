import { useCarrinho, parsePreco } from "../../contexts/CarrinhoContext";
import "./ItemCarrinho.css";

const ItemCarrinho = ({ livro }) => {
  const {
    incrementarQuantidade,
    decrementarQuantidade,
  } = useCarrinho();

  const quantidade = livro.quantidade ?? 1;
  const precoUnit =
    typeof livro.precoNumber === "number" ? livro.precoNumber : parsePreco(livro.preco);
  const subtotal = precoUnit * quantidade;

  return (
    <div className="item-estante-carrinho">
      <img className="img-carrinho" src={livro.link_imagem} alt={livro.titulo} />

      <div className="informacoes-carrinho">
        <h3 className="nome-estante-carrinho">{livro.titulo}</h3>

        <div className="valor-e-quantidade">
          <div >
            <p className="valor-carrinho">R$ {precoUnit.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
          </div>

          <div className="controle-quantidade-carrinho">
            <button
              className="botao-menos-carrinho"
              onClick={() => decrementarQuantidade(livro.id)}
              aria-label={`Diminuir quantidade de ${livro.titulo}`}
            >
              -
            </button>

            <span className="quantidade-carrinho">{quantidade}</span>

            <button
              className="botao-mais-carrinho"
              onClick={() => incrementarQuantidade(livro.id)}
              aria-label={`Aumentar quantidade de ${livro.titulo}`}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCarrinho;
