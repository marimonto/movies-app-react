import './styles.scss';
import PropTypes from 'prop-types';
const Button = ({ text, handleClick, className, type }) => {
    return (
        <button onClick={handleClick} className={className} type={type}>
            {text}
        </button >
    );
}
Button.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]).isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    handleClick: PropTypes.func,
}

export default Button;