import boom from '../../../assets/boom.png';
import './styles.scss';

const NotFound = () => {
    return <div className="error-container">
        <img className="boom" src={boom} alt="Boom comic" />
        <h1 className="error-title">Error 404</h1>
        <h2 className="error-title">Lo sentimos, pero la página que busca no existe</h2>
    </div>
}

export default NotFound;