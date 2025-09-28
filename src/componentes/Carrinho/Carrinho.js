import { MdClose } from "react-icons/md";
import { useCarrinho, parsePreco } from "../../contexts/CarrinhoContext";
import "./Carrinho.css";
import ItemCarrinho from "./ItemCarrinho";

const Carrinho = ({ onClose }) => {
  const { itemCarrinho } = useCarrinho();

  const quantidade = itemCarrinho.length;

  const total = itemCarrinho.reduce((acc, item) => {
    const preco =
      typeof item.precoNumber === "number" ? item.precoNumber : parsePreco(item.preco);
    const q = item.quantidade ?? 1;
    return acc + preco * q;
  }, 0);

  return (
    <div id="carrinho">
      <div className="cabecalho-carrinho">
        <h2>
          Seu Carrinho tem{" "}
          <strong>
            {quantidade} {quantidade === 1 ? "item" : "itens"}
          </strong>
        </h2>
        <button className="botao-fechar-carrinho" onClick={onClose}>
          <MdClose className="icone-fechar-carrinho" />
        </button>
      </div>

      <div className="estante-carrinho-itens">
        {quantidade === 0 ? (
          <p className="carrinho-vazio">Seu carrinho está vazio 😢</p>
        ) : (
          itemCarrinho.map((livro) => <ItemCarrinho key={livro.id} livro={livro} />)
        )}
      </div>

      <div className="rodape-carrinho">
        <div className="valor-total-carrinho">
          <h2>Total:</h2>
          <h2>R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</h2>
        </div>
        <button className="botao-finalizar-compra" disabled={quantidade === 0}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default Carrinho;
