import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import ImagensTranparentes from '../ImagensTransparentes/ImagensTransparentes';
import NavBar from '../NavBar/NavBar';
import TextoImput from '../TextoInput/TextoInput';
import './ConfiguracoesUsuario.css';
import ItemListaConfiguracoes from './ItemListaConfiguracoes/ItemListaConfiguracoes';

const ConfiguracoesUsuario = () => {
  const { user } = useAuth();

  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');

  if (!user) {
    return <p>Você precisa estar logado!</p>;
  }
  return (
    <div className="centralizando">
      <div className="configuracoes-usuario">
        <NavBar />
        <ImagensTranparentes />
        <div className="formulario-configuracoes">
          <div className="lista-configuracos">
            <div className="informacoes-imutaveis">
              <ItemListaConfiguracoes titulo="Nome do usuario" lugar={user.nome} />
              <ItemListaConfiguracoes titulo="Data de nascimento" lugar={user.dataNascimento} />
              <ItemListaConfiguracoes titulo="CPF" lugar={user.cpf} />
            </div>

            <form className="informacoes-contato">
              <fieldset className="min-widit">
                <legend>Informaçoes De Contato</legend>
                <TextoImput
                  label="Nome"
                  type="text"
                  placeholder={user.nomeSocial}
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                />
                <TextoImput
                  label="E-mail"
                  type="text"
                  placeholder={user.email}
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                />
                <TextoImput
                  label="Telefone"
                  type="text"
                  placeholder={user.telefone}
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                />
              </fieldset>
            </form>

            <form className="informacoes-endereco ">
              <fieldset className="min-widit">
                <legend>Endereço</legend>
                <div className="background-color-transparent">
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
                    label="Numero"
                    type="text"
                    placeholder={user.endereco.numero}
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                  />
                </div>
                <div className="background-color-transparent">
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
                <div className="background-color-transparent">
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

                  <button
                    onSubmit={console.log(setPais)}
                    className="atualizar-configuracoes-endereco"
                  >
                    Atualizar
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
