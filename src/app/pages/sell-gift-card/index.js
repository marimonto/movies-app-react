import Input from '../../components/input';
import Button from '../../components/button';
import './styles.scss';
const SellGiftCard = () => {

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
                name="shopperName"
                type="text"
                title="Nombre del comprador"
                value=""

            />
            <Input
                name="documentType"
                type="text"
                title="tipo de documento"
                value=""

            />
            <Input
                name="documentNumber"
                type="text"
                title="número de documento"
                value=""
            />
            <Input
                name="cellphoneNumber"
                type="text"
                title="número de celular"
                value=""
            />
            <Input
                name="shop"
                type="text"
                title="Tienda"
                value=""

            />
            <Input
                name="shopperName"
                type="text"
                title="Nombre del vendedor"
                value=""

            />
            <Button type="submit" text="Guardar" className="save-card-btn" />
        </form>
    </div>
}

export default SellGiftCard;