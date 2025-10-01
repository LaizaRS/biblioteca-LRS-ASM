import { useState } from 'react';
import { Link } from 'react-router-dom';
import SenhaInput from '../SenhaInput/SenhaInput';
import TextoImput from '../TextoInput/TextoInput';
import './paginaCadastro.css';

const PaginaCadastro = () => {
  const [nome, setNome] = useState('');
  const [nomeSocial, setNomeSocial] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');

  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastrarDados = async (e) => {
    e.preventDefault();

    // Montando o objeto
    const dadosCadastrados = {
      nome,
      nomeSocial,
      cpf,
      dataNascimento,
      telefone,
      email,
      senha,
      endereco: {
        rua,
        bairro,
        complemento,
        cidade,
        cep,
        estado,
        pais,
      },
    };

    console.log('Enviando dados:', dadosCadastrados);

    // try {
    //   const resposta = await fetch('http://localhost:3001/cadastro', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(dadosCadastrados),
    //   });

    //   if (resposta.ok) {
    //     const resultado = await resposta.json();
    //     alert('Cadastro realizado com sucesso!');
    //     console.log('Resposta da API:', resultado);
    //   } else {
    //     alert('Erro ao cadastrar. Verifique os dados.');
    //   }
    // } catch (erro) {
    //   console.error('Erro na requisição:', erro);
    //   alert('Não foi possível conectar ao servidor.');
    // }
  };

  return (
    <div className="centralizando">
      <div className="pagina-cadastro">
        <h1 className="titulo-cadastro">Faça o seu Cadastro</h1>
        <div className="formulario-cadastro">
          <form onSubmit={handleCadastrarDados}>
            <div className="display-flex-formulario-cadastro">
              <fieldset className="cadastro-fieldset-max-widit">
                <legend>Dados Pessoais</legend>
                <TextoImput
                  required
                  label="Nome *"
                  type="text"
                  placeholder="Digite seu Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <TextoImput
                  label="Nome Social"
                  type="text"
                  placeholder="Digite seu Nome Social"
                  value={nomeSocial}
                  onChange={(e) => setNomeSocial(e.target.value)}
                />
                <TextoImput
                  required
                  label="CPF *"
                  type="text"
                  placeholder="Digite seu CPF"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
                <TextoImput
                  label="Data de Nascimento"
                  type="date"
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}
                />
                <TextoImput
                  label="Telefone com DDD"
                  type="text"
                  placeholder="Numero de telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </fieldset>

              <fieldset className="cadastro-fieldset-max-widit">
                <legend>Endereço</legend>
                <TextoImput
                  label="CEP"
                  type="text"
                  placeholder="Digite seu CEP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                />
                <TextoImput
                  label="Rua"
                  type="text"
                  placeholder="Digite sua rua"
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                />
                <TextoImput
                  label="Bairro"
                  type="text"
                  placeholder="Digite seu bairro"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                />
                <TextoImput
                  label="Complemento"
                  type="text"
                  placeholder="Complemento"
                  value={complemento}
                  onChange={(e) => setComplemento(e.target.value)}
                />
                <TextoImput
                  label="Cidade"
                  type="text"
                  placeholder="Digite o nome da sua Cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
                <TextoImput
                  label="Estado"
                  type="text"
                  placeholder="Digite o nome do seu Estado"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                />
                <TextoImput
                  label="País"
                  type="text"
                  placeholder="Digite o nome do seu País"
                  value={pais}
                  onChange={(e) => setPais(e.target.value)}
                />
              </fieldset>

              <fieldset className="cadastro-fieldset-max-widit">
                <legend>Conta</legend>
                <TextoImput
                  required
                  label="E-mail"
                  type="email"
                  placeholder="Digite o seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <SenhaInput
                  required
                  placeholder="Digite Sua Senha"
                  valueSenha={senha}
                  onChangeSenha={(e) => setSenha(e.target.value)}
                />
                <SenhaInput
                  required
                  placeholder="Confirme Sua Senha"
                  valueSenha={confirmarSenha}
                  onChangeSenha={(e) => setConfirmarSenha(e.target.value)}
                />
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
    </div>
  );
};

export default PaginaCadastro;
