import { FaCartPlus, FaSearch } from 'react-icons/fa';
import { TbLogin, TbLogin2 } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './navBar.css';

const NavBar = () => {
  const { logout, user } = useAuth();

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
            <Link to="/">Início</Link>
          </li>

          {!user ? (
        
            <li>
              <Link to="/login" title="Faça o login">
                <TbLogin className="icone-navbar" />
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/lista-de-desejos">Lista de Desejos</Link>
              </li>

              <li>
                <Link to="/meu-perfil">{user.nomeSocial}</Link>
              </li>

              <li>
                <button>
                  <FaCartPlus className="icone-navbar" />
                </button>
              </li>

              <li>
                <button onClick={logout} title="Sair">
                  <TbLogin2 className="icone-navbar" />
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
