import { useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import './SenhaInput.css';

const SenhaInput = ({ onChangeSenha, valueSenha, ...props }) => {
  const [mostrar, setMostrar] = useState(false);

  const alternarVisibilidade = () => {
    setMostrar((prev) => !prev);
  };

  return (
    <div className="input-flex">
      <label>Senha</label>
      <div className="input-senha">
        <input {...props}
          name="senha"
          type={mostrar ? 'text' : 'password'}
         
          value={valueSenha}
          onChange={onChangeSenha}
        />
        <button
          type="button"
          className="background-color-tranparent"
          onClick={alternarVisibilidade}
        >
          {mostrar ? <LuEye className="senha-icone" /> : <LuEyeOff className="senha-icone" />}
        </button>
      </div>
    </div>
  );
};

export default SenhaInput;
