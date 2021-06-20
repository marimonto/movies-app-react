/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Input from '../../components/input';
import Button from '../../components/button';
import Select from "../../components/select";
import { giftCardsActions } from "../../../redux/gift-cards/actions";
import { useParams } from "react-router-dom";


import './styles.scss';
const SellGiftCard = () => {
    const dispatch = useDispatch();
    const giftCards = useSelector((state) => state.giftCards.giftCards)
    const documentTypes = useSelector((state) => state.giftCards.constants.documentTypes)
    const constantsLoading = useSelector((state) => state.giftCards.constantsLoading)
    const shops = useSelector((state) => state.giftCards.constants.shops)
    const [giftCard, setGiftCard] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        dispatch(giftCardsActions.getById(id));
    }, []);


    useEffect(() => {
        giftCards.length === 1 && setGiftCard(giftCards[0])
    }, [giftCards]);

    const handleChange = (event) => {
        setGiftCard(
            {
                ...giftCard,
                [event.target.name]: event.target.value
            }
        )
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(giftCardsActions.sellCard(giftCard))
    }
    return giftCard && !constantsLoading && <div className="sell-gift-container">
        <div className="sell-gift-card">
            <header className="header">
                <h1>adquirir tarjeta</h1>
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
                        name="shopperName"
                        type="text"
                        title="Nombre del comprador"
                        value={giftCard.shopperName}
                        handleChange={handleChange}
                    />
                    <Input
                        name="cellphoneNumber"
                        type="text"
                        title="Número de celular"
                        value={giftCard.cellphoneNumber}
                        handleChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <Select
                        name="documentType"
                        title="Tipo de documento"
                        value={giftCard.documentType}
                        options={documentTypes}
                        handleChange={handleChange}
                    />
                    <Input
                        name="documentNumber"
                        type="text"
                        title="Número de documento"
                        value={giftCard.documentNumber}
                        handleChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <Input
                        name="buyerName"
                        type="text"
                        title="Nombre del vendedor"
                        value={giftCard.buyerName}
                        handleChange={handleChange}

                    />
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

    </div>
}

export default SellGiftCard;