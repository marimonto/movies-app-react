import './styles.scss';
const Select = ({ title, options, value, handleChange}) => {
    return (
        <div className="input-col">
            <label>
                <span className="label">{title}</span>
                <select name="select" className='select' value={value} onChange={handleChange}>
                    {options.map(option => <option value={option}>{option}</option>)}
                </select>
            </label>
        </div>

    );
}
Select.propTypes = {

}

export default Select;