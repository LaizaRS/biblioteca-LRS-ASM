import { Link } from 'react-router-dom';
import './paginaCadastro.css';

const PaginaCadastro = () => {
  return (
    <div className="centralizando">
      <div className="pagina-cadastro">
        <h1 className="titulo-cadastro">Faça o seu Cadastro</h1>
        <form className="formulario-cadastro">
          <div className="display-flex-formulario-cadastro">
            <fieldset>
              <label>Nome</label>
              <legend>Dados Pessoais</legend>
              <input name="nome" type="text" placeholder="Digite seu Nome" />
              <label>Nome Social</label>
              <input name="nome" type="text" placeholder="Digite seu Nome Social" />
              <label>CPF</label>
              <input type="text" placeholder="Digite seu CPF" />
              <label>Data de Dascimento</label>
              <input type="text" placeholder="Digite sua data de nascimento" />
              <label> Telefone</label>
              <input type="text" placeholder="Numero de telefone" />
            </fieldset>

            <fieldset>
              <legend> Endereço</legend>
              <label>CEP</label>
              <input name="cep" id="1" type="text" placeholder="Digite seu CEP" />
              <label>Rua</label>
              <input type="text" placeholder="Digite sua Rua" />
              <label>Bairro</label>
              <input type="text" placeholder="Digite seu Barrio" />
              <label>Complemento</label>
              <input type="text" placeholder="Complemento" />
              <label>Cidade</label>
              <input type="text" label placeholder="Digite o nome da sua Cidade" />
              <label>Estado</label>
              <input type="text" placeholder="Digite o nome do seu Estado" />
              <label>País</label>
              <input type="text" placeholder="Digite o nome do seu País" />
            </fieldset>

            <fieldset>
              <legend>Conta</legend>
              <label>E-mail</label>
              <input type="text" />
              <label>Senha</label>
              <input type="senha" />
              <label>Confirmar Senha</label>
              <input type="senha" />
            </fieldset>
          </div>
          <div className="botoes-cadastrar-voltar-loguin">
            <button type="submit" className="cadastrar">
              Cadastrar
            </button>
            <Link to="/login" className="voltar-login">
              Já possuo uma conta
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaginaCadastro;
