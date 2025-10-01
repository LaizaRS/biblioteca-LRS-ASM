import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import ImagensTranparentes from '../ImagensTransparentes/ImagensTransparentes';
import NavBar from '../NavBar/NavBar';
import SenhaInput from '../SenhaInput/SenhaInput';
import TextoImput from '../TextoInput/TextoInput';
import './ConfiguracoesUsuario.css';
import ItemListaConfiguracoes from './ItemListaConfiguracoes/ItemListaConfiguracoes';

const ConfiguracoesUsuario = () => {
  const { user } = useAuth();

  const [nick, setNick] = useState('');
  const [mail, setMail] = useState('');
  const [celular, setCelular] = useState('');

  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');

  const [senhaAntiga, setSenhaAntiga] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  if (!user) {
    return (
      <div className="voce-precisa-estar-logado">
        <h1>Você precisa estar logado!</h1>
      </div>
    );
  }

  const handleAtualizarDados = async (e) => {
    e.preventDefault();

    const dadosAtualizados = {};
    if (nick) dadosAtualizados.nick = nick;
    if (mail) dadosAtualizados.mail = mail;
    if (celular) dadosAtualizados.celular = celular;

    dadosAtualizados.endereco = {};
    if (rua) dadosAtualizados.endereco.rua = rua;
    if (bairro) dadosAtualizados.endereco.bairro = bairro;
    if (numero) dadosAtualizados.endereco.numero = numero;
    if (complemento) dadosAtualizados.endereco.complemento = complemento;
    if (cidade) dadosAtualizados.endereco.cidade = cidade;
    if (cep) dadosAtualizados.endereco.cep = cep;
    if (estado) dadosAtualizados.endereco.estado = estado;
    if (pais) dadosAtualizados.endereco.pais = pais;


  if (senhaAntiga || novaSenha || confirmarSenha) {
  if (!senhaAntiga || !novaSenha || !confirmarSenha) {
    alert('Preencha todos os campos de senha para alterá-la!');
    return;
  }

  if (senhaAntiga !== user.senha) {
    alert('Senha antiga incorreta!');
    return;
  }

  if (novaSenha !== confirmarSenha) {
    alert('A nova senha e a confirmação não conferem!');
    return;
  }

  dadosAtualizados.senhaAntiga = senhaAntiga;
  dadosAtualizados.novaSenha = novaSenha;
}

    console.log('Enviando dados para API:', dadosAtualizados);

    // try {
    //   const resposta = await fetch(`http://localhost:3001/usuarios/${user.id}`, {
    //     method: 'PATCH',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(dadosAtualizados),
    //   });

    //   if (resposta.ok) {
    //     alert('Dados atualizados com sucesso!');
    //     setSenhaAntiga('');
    //     setNovaSenha('');
    //     setConfirmarSenha('');
    //   } else if (resposta.status === 401) {
    //     alert('Senha antiga incorreta!');
    //   } else {
    //     alert('Erro ao atualizar os dados.');
    //   }
    // } catch (erro) {
    //   console.error('Erro na requisição:', erro);
    //   alert('Não foi possível conectar ao servidor.');
    // }
  };

  return (
    <div className="centralizando">
      <div className="configuracoes-usuario">
        <NavBar />
        <ImagensTranparentes />
        <div className="formulario-configuracoes">
          <div className="lista-configuracos">
            {/* ===== FORM DADOS PESSOAIS + CONTATO ===== */}
            <form className="informacoes-contato" onSubmit={handleAtualizarDados}>
              <fieldset className="padding-vinte">
                <legend>Informações Pessoais</legend>
                <div className="informacoes-imutaveis">
                  <ItemListaConfiguracoes titulo="Nome do usuário" lugar={user.nome} />
                  <ItemListaConfiguracoes titulo="Data de nascimento" lugar={user.dataNascimento} />
                  <ItemListaConfiguracoes titulo="CPF" lugar={user.cpf} />
                </div>

                <div className="display-flex-configuracoes-row">
                  <TextoImput
                    className="minimo-widit-input-configuracoes input-background-color"
                    label="Nome"
                    type="text"
                    placeholder={user.nomeSocial}
                    value={nick}
                    onChange={(e) => setNick(e.target.value)}
                  />
                  <TextoImput
                    className="minimo-widit-input-configuracoes input-background-color"
                    label="E-mail"
                    type="text"
                    placeholder={user.email}
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                  />
                  <TextoImput
                    className="minimo-widit-input-configuracoes input-background-color"
                    label="Telefone"
                    type="text"
                    placeholder={user.telefone}
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                  />
                </div>

                <div className="display-flex-configuracoes-row">
                  <SenhaInput
                    className="minimo-widit-senha-configuracoes input-background-color"
                    placeholder="Senha antiga"
                    valueSenha={senhaAntiga}
                    onChangeSenha={(e) => setSenhaAntiga(e.target.value)}
                  />
                  <SenhaInput
                    className="minimo-widit-senha-configuracoes input-background-color"
                    placeholder="Nova senha"
                    valueSenha={novaSenha}
                    onChangeSenha={(e) => setNovaSenha(e.target.value)}
                  />
                  <SenhaInput
                    className="minimo-widit-senha-configuracoes input-background-color"
                    placeholder="Confirmar nova senha"
                    valueSenha={confirmarSenha}
                    onChangeSenha={(e) => setConfirmarSenha(e.target.value)}
                  />
                </div>
              </fieldset>
            </form>

            <form className="informacoes-endereco" onSubmit={handleAtualizarDados}>
              <fieldset className="min-widit">
                <legend>Endereço</legend>
                <div className="background-color-transparent minimo-widit-input-configuracoes">
                  <TextoImput
                    label="Rua"
                    type="text"
                    placeholder={user.endereco.rua}
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}
                  />
                  <TextoImput
                    label="Bairro"
                    type="text"
                    placeholder={user.endereco.bairro}
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                  />
                  <TextoImput
                    label="Número"
                    type="text"
                    placeholder={user.endereco.numero}
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                  />
                </div>
                <div className="background-color-transparent minimo-widit-input-configuracoes">
                  <TextoImput
                    label="Complemento"
                    type="text"
                    placeholder={user.endereco.complemento}
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                  />
                  <TextoImput
                    label="Cidade"
                    type="text"
                    placeholder={user.endereco.cidade}
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                  />
                  <TextoImput
                    label="CEP"
                    type="text"
                    placeholder={user.endereco.cep}
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                  />
                </div>
                <div className="background-color-transparent minimo-widit-input-configuracoes">
                  <TextoImput
                    label="Estado"
                    type="text"
                    placeholder={user.endereco.estado}
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                  />
                  <TextoImput
                    label="País"
                    type="text"
                    placeholder={user.endereco.pais}
                    value={pais}
                    onChange={(e) => setPais(e.target.value)}
                  />
                  <button type="submit" className="botao-atualizar-configuracoes-endereco">
                    Salvar Atualizações
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfiguracoesUsuario;
