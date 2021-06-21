
import './styles.scss';
import logoHeader from '../../../assets/logo-header.png';
import { useDispatch } from "react-redux";
import Avatar from '../avatar';
import Dropdown from '../dropdown';
import { userActions } from "../../../redux/user/actions";
import { history } from "../../../redux/store";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleClickLogout = () => {
    dispatch(userActions.logout())
  }

  const handleClickLogo = () => {
    history.push('/gift-cards');
  }
  
  return (
    <header className="layout-header">
      <nav className="nav">
        <img className="logo-header" src={logoHeader} alt="Logo Movies" onClick={handleClickLogo} />
        <div className="dropdown">
          <Avatar/>
          <Dropdown handleClick={handleClickLogout} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar;