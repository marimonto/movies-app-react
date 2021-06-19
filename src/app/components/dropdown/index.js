import './styles.scss';
import { BiLogOut } from 'react-icons/bi';

const Dropdown = ({ handleClick }) => {
    
   
    return (

        <div className="dropdown-content">
            <div className="dropdown-option" onClick={handleClick} value="logout"><BiLogOut className="icon" /><span>Cerrar sesión</span></div>
        </div>
    );
}

export default Dropdown;