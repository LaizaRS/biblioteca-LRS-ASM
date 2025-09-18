import ImagensTranparentes from "../ImagensTransparentes/ImagensTransparentes";
import NavBar from "../NavBar/NavBar";
import "./ConfiguracoesUsuario.css";

const ConfiguracoesUsuario = () => {
  return (
    <div className="centralizando">
      <div className="configuracoes-usuario">
        <NavBar />
        <div className="imagens-transparentes-fora-tela-inicio">
          <ImagensTranparentes />
        </div>
        <form action="">
          <fieldset>
            <label>Nome</label>
            <legend>Dados Pessoais</legend>
            <input name="nome" type="text" placeholder="Digite seu Nome" />
            <label>Nome Social</label>
            <input
              name="nome"
              type="text"
              placeholder="Digite seu Nome Social"
            />
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
            <input
              type="text"
              label
              placeholder="Digite o nome da sua Cidade"
            />
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
          <div>
            <button type="submit">Cadastrar</button>
            <button>Já possuo uma conta</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfiguracoesUsuario;
