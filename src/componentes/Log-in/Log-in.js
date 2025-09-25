import { useState } from 'react';
import { TbLogin } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import SenhaInput from '../SenhaInput/SenhaInput';
import TextoImput from '../TextoInput/TextoInput';
import './LogIn.css';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ok = login(email, senha);

    if (ok) {
      navigate('/');
    } else {
      alert('E-mail ou senha inválidos!');
    }
  };

  return (
    <div className="log-in">
      <div className="bacground-shape">
        <div className="faca-seu-login">
          <TbLogin className="login-icone" />
          <h1>Faça Seu login</h1>
        </div>
        <p>Entre com suas informações de cadastro.</p>
        <form onSubmit={handleSubmit}>
          <div className="e-mail-senha">
            <TextoImput
              label="E-mail"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="e-mail-senha">
            <SenhaInput
              name='senha'
              autoComplete="123"
              placeholder="Digite Sua Senha"
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
          <button type="submit" className="botao-entrar">
            ENTRAR
          </button>
        </form>
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
