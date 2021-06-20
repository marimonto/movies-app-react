import { IoIosWarning } from 'react-icons/io';
import './styles.scss';

const DataNotFound = () => {

    return (
        <section className="warning-card">
            <IoIosWarning/>
            No se encontró ninguna tarjeta de regalo
        </section >
    );
}

export default DataNotFound;