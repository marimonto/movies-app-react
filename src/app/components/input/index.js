
import PropTypes from 'prop-types';
import './styles.scss';

const Input = ({ type, name, value, handleChange, title, disabled }) => {
    return (
        <div className="input-col">
            <label>
                <span className="label">{title}</span>
                <input id={name} type={type} name={name} value={value} onChange={handleChange} className={`input ${name}-input`} disabled={disabled} />
            </label>
           
        </div>
    )
}

Input.propTypes = {
    handleChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    value: PropTypes.string
}

export default Input;