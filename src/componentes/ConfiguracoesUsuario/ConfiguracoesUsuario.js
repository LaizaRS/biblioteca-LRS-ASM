import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import ImagensTranparentes from '../ImagensTransparentes/ImagensTransparentes';
import NavBar from '../NavBar/NavBar';
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

  if (!user) {
    return <p>Você precisa estar logado!</p>;
  }

const handleAtualizarDados = (e) => {
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

  console.log("Dados atualizados:", dadosAtualizados);
};
  

  return (
    <div className="centralizando">
      <div className="configuracoes-usuario">
        <NavBar />
        <ImagensTranparentes />
        <div className="formulario-configuracoes">
          <div className="lista-configuracos">
            <form className="informacoes-contato" onSubmit={handleAtualizarDados}>
              <fieldset className="padding-vinte">
                <legend>Informaçoes Pessoais</legend>
                <div className="informacoes-imutaveis">
                  <ItemListaConfiguracoes titulo="Nome do usuario" lugar={user.nome} />
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
                    name={user.email}
                    label="E-mail"
                    type="text"
                    placeholder={user.email}
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                  />
                  <TextoImput
                    className="minimo-widit-input-configuracoes input-background-color"
                    name={user.telefone}
                    label="Telefone"
                    type="text"
                    placeholder={user.telefone}
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                  />
                </div>
              </fieldset>
            </form>
            <form className="informacoes-endereco" onSubmit={handleAtualizarDados}>
              <fieldset className="min-widit">
                <legend>Endereço</legend>
                <div className="background-color-transparent minimo-widit-input-configuracoes">
                  <TextoImput
                    name={user.endereco.rua}
                    label="Rua"
                    type="text"
                    placeholder={user.endereco.rua}
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}
                  />
                  <TextoImput
                    name={user.endereco.bairro}
                    label="Bairro"
                    type="text"
                    placeholder={user.endereco.bairro}
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                  />
                  <TextoImput
                    name={user.endereco.numero}
                    label="Numero"
                    type="text"
                    placeholder={user.endereco.numero}
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                  />
                </div>
                <div className="background-color-transparent minimo-widit-input-configuracoes">
                  <TextoImput
                    name={user.endereco.complemento}
                    label="Complemento"
                    type="text"
                    placeholder={user.endereco.complemento}
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                  />

                  <TextoImput
                    name={user.endereco.cidade}
                    label="Cidade"
                    type="text"
                    placeholder={user.endereco.cidade}
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                  />

                  <TextoImput
                    name={user.endereco.cep}
                    label="CEP"
                    type="text"
                    placeholder={user.endereco.cep}
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                  />
                </div>
                <div className="background-color-transparent minimo-widit-input-configuracoes">
                  <TextoImput
                    name={user.endereco.estado}
                    label="Estado"
                    type="text"
                    placeholder={user.endereco.estado}
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                  />
                  <TextoImput
                    name={user.endereco.pais}
                    label="País"
                    type="text"
                    placeholder={user.endereco.pais}
                    value={pais}
                    onChange={(e) => setPais(e.target.value)}
                  />

                  <button
                    type="submit"
                    className="botao-atualizar-configuracoes-endereco"
                  >
                    Salvar Atualições
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
