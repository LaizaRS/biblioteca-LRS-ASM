import ImagensTranparentes from '../ImagensTransparentes/ImagensTransparentes';
import NavBar from '../NavBar/NavBar';
import './ListaDeDesejos.css';

const ListaDeDesejos = () => {
  return (
    <div className="centralizando">
      <div className="lista-de-desejos">
        <NavBar />
        <div className="imagens-transparentes-fora-tela-inicio">
          <ImagensTranparentes />
        </div>
      </div>
    </div>
  );
};

export default ListaDeDesejos;
