import './styles.scss';

const ButtonComponent = ({ text, handleClick, className }) => {
    return (
        <div onClick={handleClick} className={className}>
            {text}
        </div >
    );
}

export default ButtonComponent;