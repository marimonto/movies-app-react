import './styles.scss';

const ButtonComponent = ({ text, handleClick, className }) => {
    return (
        <button onClick={handleClick}  className={className}>
            {text}
        </button >
    );
}

export default ButtonComponent;