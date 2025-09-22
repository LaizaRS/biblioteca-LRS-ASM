import { useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import './SenhaInput.css';

const SenhaInput = ({ placeholderSenha, valueSenha, onChangeSenha }) => {
  const [mostrar, setMostrar] = useState(false);

  const alternarVisibilidade = () => {
    setMostrar((prev) => !prev);
  };

  return (
    <div className="input-flex">
      <label>Senha</label>
      <div className="input-senha">
        <input
          type={mostrar ? 'text' : 'password'}
          placeholder={placeholderSenha}
          value={valueSenha}
          onChange={onChangeSenha}
        />
        <button
          type="button"
          className="background-color-tranparent"
          onClick={alternarVisibilidade}
        >
          {mostrar ? <LuEyeOff className="senha-icone" /> : <LuEye className="senha-icone" />}
        </button>
      </div>
    </div>
  );
};

export default SenhaInput;
