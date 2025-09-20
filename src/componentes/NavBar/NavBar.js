import { FaCartPlus, FaSearch } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img className="img-logo" src="../../logo.png" alt="logo" />
      </div>
      <div className="input-navbar">
        <input type="text" />
        <FaSearch className="lupa-navbar" />
      </div>
      <nav>
        <ul className="display-flex">
          <li>
            <Link to="/">Inico</Link>
          </li>

          <li>
            <Link to="/ListaDeDesejos">Lista de Desejos</Link>
          </li>

          <li>
            <Link to="/ConfiguracoesUsuario">Nome do perfil</Link>
          </li>

          <li>
            <button>
              <FaCartPlus className="icone-navbar" />
            </button>
          </li>

          <li>
            <button>
              <IoLogOutOutline className="icone-navbar" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
