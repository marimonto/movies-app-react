import Input from '../../components/input';
import Button from '../../components/button';
import './styles.scss';
const EditGiftCard = () => {

    return <div className="edit-gift-card">
        <form className="gift-card-form">
            <Input
                name="id"
                type="text"
                title="Id"
                value=""
                disabled
            />
            <Input
                name="state"
                type="text"
                title="Estado"
                value=""
                disabled

            />
            <Input
                name="value"
                type="text"
                title="Valor"
                value=""
                disabled

            />
            <Input
                name="purchaseValue"
                type="text"
                title="Valor pago con tarjeta"
                value=""

            />
            <Input
                name="invoiceNumber"
                type="text"
                title="Número de la factura"
                value=""

            />
            <Input
                name="shop"
                type="text"
                title="Tienda"
                value=""

            />
            <Button type="submit" text="Guardar" className="save-card-btn" />
        </form>
    </div>
}

export default EditGiftCard;