
import './styles.scss';

const Navbar = ({ type, name, value, handleChange, title, }) => {
    return (
        <div className="input-col">
            <label htmlFor={name} className="label">{title}</label>
            <input id={name} type={type} name={name} value={value} onChange={handleChange} className="input" />
        </div>
    )
}

export default Navbar;