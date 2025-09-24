import { useAuth } from '../../contexts/AuthContext';
import ImagensTranparentes from '../ImagensTransparentes/ImagensTransparentes';
import NavBar from '../NavBar/NavBar';
import './ConfiguracoesUsuario.css';

const ConfiguracoesUsuario = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>Você precisa estar logado!</p>;
  }
  return (
    <div className="centralizando">
      <div className="configuracoes-usuario">
        <NavBar />
        <ImagensTranparentes />
        <div className='formulario-configuracoes'>
          <div>
            <h1>{user.nome}</h1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ConfiguracoesUsuario;
