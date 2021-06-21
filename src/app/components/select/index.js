import PropTypes from 'prop-types';

import './styles.scss';
const Select = ({ title, options, value, handleChange, name}) => {
    return (
        <div className="input-col">
            <label>
                <span className="label">{title}</span>
                <select name={name} className='select' value={value} onChange={handleChange}>
                    {options.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
            </label>
        </div>

    );
}
Select.propTypes = {
    title: PropTypes.string,
    options: PropTypes.array,
    values: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    handleChange: PropTypes.func,
    name: PropTypes.string
}

export default Select;