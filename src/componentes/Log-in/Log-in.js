import { useState } from 'react';
import { IoLogInOutline } from 'react-icons/io5';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import { CiLock } from 'react-icons/ci';

import './LogIn.css';

const LogIn = () => {
  const [classeEye, setClasseEye] = useState('display-none');
  const [classeEyeOff, setClasseEyeOff] = useState('');
  const [inputType, setInputType] = useState('password');

  const mostrarSenha = () => {
    setInputType('password');
    setClasseEye('display-none');
    setClasseEyeOff('');
  };

  const esconderSenha = () => {
    setInputType('text');
    setClasseEye('');
    setClasseEyeOff('display-none');
  };

  return (
    <div className="log-in">
      <div className="bacground-shape">
        <div className="faca-seu-login">
          <IoLogInOutline className="login-icone" />
          <h1>Faça Seu login</h1>
        </div>
        <p>Entre com suas informações de cadastro.</p>
        <div className="e-mail-senha">
          <label>E-mail</label>
          <input type="email" placeholder="Digite seu e-mail" />
        </div>
        <div className="e-mail-senha">
          <label>Senha</label>
          <div className="input-senha">
            <CiLock className="cadeado-icone" />
            <input type={inputType} placeholder="Digite sua senha" />
            <div>
              <button type="button" className="background-color-tranparent" onClick={mostrarSenha}>
                <LuEye className={`visivel ${classeEye}`} />
              </button>
              <button type="button" className="background-color-tranparent" onClick={esconderSenha}>
                <LuEyeOff className={`escondido ${classeEyeOff}`} />
              </button>
            </div>
          </div>
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
