
import './styles.scss';
import logoHeader from '../../../assets/logo-header.png';
import { useDispatch } from "react-redux";
import Avatar from '../avatar';
import Dropdown from '../dropdown';
import { userActions } from "../../../redux/user/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleClickLogout = () => {
    dispatch(userActions.logout())
  }
  return (
    <header className="layout-header">
      <nav className="nav">
        <img className="logo-header" src={logoHeader} alt="Logo Movies" />
        <div className="dropdown">
          <Avatar/>
          <Dropdown handleClick={handleClickLogout} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar;