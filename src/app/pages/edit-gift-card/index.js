import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { giftCardsActions } from "../../../redux/gift-cards/actions";
import Input from '../../components/input';
import Button from '../../components/button';
import Select from "../../components/select";
import './styles.scss';
const EditGiftCard = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const giftCards = useSelector((state) => state.giftCards.giftCards)
    const [giftCard, setGiftCard] = useState([]);
    const [purchase, setPurchase] = useState();
    const shops = useSelector((state) => state.giftCards.constants.shops)
    const constantsLoading = useSelector((state) => state.giftCards.constantsLoading)

    useEffect(() => {
        dispatch(giftCardsActions.getById(id));
    }, []);

    useEffect(() => {
        giftCards && giftCards.length === 1 && setGiftCard(giftCards[0])
    }, [giftCards]);

    const handleChange = (event) => {
        setPurchase(
            {
                ...purchase,
                [event.target.name]: event.target.value
            }
        )
    };

    const handleSubmit = e => {
        e.preventDefault();
        const newGiftCard = JSON.parse(JSON.stringify(giftCard))
        newGiftCard.purchases.push(purchase);
        dispatch(giftCardsActions.editCard(newGiftCard))
    }

    return (!constantsLoading && <div className="edit-gift-container">
        <div className="edit-gift-card">
            <header className="header">
                <h1>registrar compra</h1>
            </header>
            <form className="gift-card-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <Input
                        name="id"
                        type="text"
                        title="Id"
                        value={giftCard.id}
                        disabled
                    />
                    <Input
                        name="value"
                        type="text"
                        title="Valor"
                        value={giftCard.value}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <Input
                        name="value"
                        type="text"
                        title="Valor pago con tarjeta"
                        value={purchase && purchase.value}
                        handleChange={handleChange}

                    />
                    <Input
                        name="number"
                        type="text"
                        title="Número de la factura"
                        value={purchase && purchase.number}
                        handleChange={handleChange}
                    />
                </div>
                <div className="form-group shop-select">
                    <Select
                        name="shop"
                        title="Tienda"
                        value={giftCard.shop}
                        options={shops}
                        handleChange={handleChange}
                    />
                </div>
                <Button type="submit" text="Guardar" className="save-card-btn" />
            </form>
        </div>
    </div>)
}

export default EditGiftCard;