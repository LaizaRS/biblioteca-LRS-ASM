import { useState } from 'react';
import { IoLogInOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import SenhaInput from '../SenhaInput/SenhaInput';
import TextoImput from '../TextoInput/TextoInput';
import './LogIn.css';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <div className="log-in">
      <div className="bacground-shape">
        <div className="faca-seu-login">
          <IoLogInOutline className="login-icone" />
          <h1>Faça Seu login</h1>
        </div>
        <p>Entre com suas informações de cadastro.</p>
        <div className="e-mail-senha">
          <TextoImput
            label="E-mail"
            inputType="text"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>
        <div className="e-mail-senha">
          <SenhaInput
            placeholderSenha="Digite Sua Senha"
            valueSenha={senha}
            onChangeSenha={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className="lembre-me-esqueci-senha">
          <div className="lembre-me">
            <input type="checkbox" />
            <label>Lembre-me</label>
          </div>
          <a className="esqueci-senha" href="#">
            Esqueci minha senha
          </a>
        </div>
        <button className="botao-entrar">ENTRAR</button>
        <div className="nao-tem-uma-conta">
          <p>Não tem uma conta?</p>
          <Link className="link-cadastro" to="/cadastro-usuario">
            Registre-se
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
