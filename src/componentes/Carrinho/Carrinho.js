import { MdClose } from 'react-icons/md';

import './Carrinho.css';
import ItemCarrinho from './ItemCarrinho';

const Carrinho = ({ onClose }) => {
  return (
    <div id="carrinho">
      <div className="cabecalho-carrinho">
        <h2>
          Seu Carrinho tem <strong>5 itens</strong>
        </h2>
        <button className="botao-fechar-carrinho" onClick={onClose}>
          <MdClose className="icone-fechar-carrinho" />
        </button>
      </div>
      <div className="estante-carrinho-itens">
        <ItemCarrinho idLivro={1} />
        <ItemCarrinho idLivro={2} />
        <ItemCarrinho idLivro={1} />
        <ItemCarrinho idLivro={2} />
        <ItemCarrinho idLivro={1} />
        <ItemCarrinho idLivro={2} />
        <ItemCarrinho idLivro={1} />
        <ItemCarrinho idLivro={2} />
        <ItemCarrinho idLivro={1} />
        <ItemCarrinho idLivro={2} />
      </div>

      <div className='rodape-carrinho'>
        <div className='valor-total-carrinho'>
          <h2>Total:</h2> <h2>R$ 123</h2>
        </div>
        <button className='botao-finalizar-compra'>Finalizar Compra</button>
      </div>
    </div>
  );
};

export default Carrinho;
