import { useFavorito } from '../../contexts/Favoritos';
import NavBar from '../NavBar/NavBar';
import CardLivros from '../CardLivros/CardLivros'; 
import './ListaDeDesejos.css';

const ListaDeDesejos = () => {
  const { favoritos } = useFavorito();

  if (favoritos.length === 0) {
    return (
      <div className="centralizando">
        <NavBar />
        <h3>CSS quebrado não pode tirar esse titulo</h3>
        <div className="lista-de-desejos">
          <div>
            <h1>Você ainda não possui uma Lista de Desejos</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="centralizando">
      <NavBar />
      <h3>CSS quebrado não pode tirar esse titulo</h3>
      <div className="lista-de-desejos">
        <div>
          <h1 className='margin-bottom-favoritos'>Minha Lista de Desejos</h1>
          <CardLivros  generoSelecionado="" autorSelecionado="" livros={favoritos} />
        </div>
      </div>
    </div>
  );
};

export default ListaDeDesejos;
