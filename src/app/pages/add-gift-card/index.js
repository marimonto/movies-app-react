import { MdClose } from 'react-icons/md';

import Input from '../../components/input';
import Button from '../../components/button';
import './styles.scss';
const AddGiftCard = ({ handleClose }) => {

    return <div className="add-gift-card">
        <form className="gift-card-form">
                <Input
                    name="id"
                    type="text"
                    title="Id"
                    value=""
                />
                <Input
                    name="value"
                    type="text"
                    title="Valor"
                    value=""
                  
                />
            <Button type="submit" text="Guardar" className="save-card-btn" />
        </form>
        <span className="close" onClick={handleClose}>
            <MdClose />
        </span>
        </div>
}

export default AddGiftCard;