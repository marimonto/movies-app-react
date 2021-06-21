
import PropTypes from 'prop-types';
import './styles.scss';

const Input = ({ handleChange, name, type, title, value, disabled, icon }) => {
    return (
        <div className="input-col">
            <label>
                <span className="label">{title}</span>
                {icon}
                <input type={type} name={name} value={value} onChange={handleChange} className={`input ${name}-input`} disabled={disabled} />
            </label>
        </div>
    )
}

Input.propTypes = {
    icon: PropTypes.element,
    disabled: PropTypes.bool,
    handleChange: PropTypes.func,
    name: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default Input;