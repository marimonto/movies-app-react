import { useSelector } from "react-redux";

import Input from '../../components/input';
import Button from '../../components/button';
import './styles.scss';
const AddGiftCard = () => {
    const isShowAddCard = useSelector((state) => state.giftCards.isShowAddCard)

    return isShowAddCard && <div className="add-gift-card">
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
                <Button type="submit" text="Guardar" className="save-card-btn"/>
            </form>
        </div>
}

export default AddGiftCard;