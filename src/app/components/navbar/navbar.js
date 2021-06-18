
import './styles.scss';
import logoHeader from '../../../assets/logo-header.png';

const Navbar = () => {
    return (
      <header className="layout-header">
        <nav className="nav">
          <img className="logo-header" src={logoHeader} alt="Logo Movies" />
          <img className="logo-header" src={logoHeader} alt="Logo Movies" />
        </nav>
      </header>
    )
}

export default Navbar;