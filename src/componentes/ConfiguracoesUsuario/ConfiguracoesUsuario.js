import ImagensTranparentes from '../ImagensTransparentes/ImagensTransparentes';
import NavBar from '../NavBar/NavBar';
import './ConfiguracoesUsuario.css';

const ConfiguracoesUsuario = () => {
  return (
    <div className="centralizando">
      <div className="configuracoes-usuario">
        <NavBar />
        <div className="imagens-transparentes-fora-tela-inicio">
          <ImagensTranparentes />
        </div>
      </div>
    </div>
  );
};

export default ConfiguracoesUsuario;
