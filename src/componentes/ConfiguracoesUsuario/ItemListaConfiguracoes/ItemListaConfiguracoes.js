import { FaEdit } from 'react-icons/fa';
import './ItemListaConfiguracoes.css';

const ItemListaConfiguracoes = ( {titulo, lugar}) => {

  return (
    <div className="display-flex-configuracoes">
      <div className="p-configuracoes">
        <p>
          {titulo}
        </p>
        <p>{lugar}</p>
      </div>
      <button className="botao-configuracoes">
        <FaEdit />
      </button>
    </div>
  );
};

export default ItemListaConfiguracoes;
