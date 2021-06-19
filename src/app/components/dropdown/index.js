import './styles.scss';
import { BiLogOut } from 'react-icons/bi';
import propTypes from 'prop-types';

const Dropdown = ({ handleClick }) => {
    return (
        <div className="dropdown-content">
            <div data-testid="logoutOption" className="dropdown-option" onClick={handleClick}><BiLogOut className="icon" /><span>Cerrar sesión</span></div>
        </div>
    );
}

Dropdown.propTypes = {
    handleClick: propTypes.func.isRequired
}

export default Dropdown;