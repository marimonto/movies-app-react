import React, { useState, useEffect } from "react";

import { MdClose } from 'react-icons/md';

import Input from '../../components/input';
import Select from '../../components/select';
import Button from '../../components/button';
import { useDispatch } from "react-redux";
import { giftCardsActions } from "../../../redux/gift-cards/actions";

import './styles.scss';
const AddGiftCard = ({ handleClose, giftCardValues }) => {
    const [id, setId] = useState("");
    const [value, setValue] = useState(giftCardValues);
    const dispatch = useDispatch();

    useEffect(() => {
        giftCardValues && setValue(giftCardValues[0])
    }, [giftCardValues]);

    const handleInput = (event) => {
        setId(event.target.value);
    };

    const handleSelect = (event) => {
        console.log(event);
        setValue(event.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const card = { id, value}
        dispatch(giftCardsActions.createCard(card))
    }


    return giftCardValues && <div className="add-gift-card">
        <form className="gift-card-form" onSubmit={handleSubmit}>
            <Input
                name="id"
                type="text"
                title="Id"
                value={id}
                handleChange={handleInput}
            />
            <Select
                name="value"
                type="value"
                title="Valor"
                value={value}
                options={giftCardValues}
                handleChange={handleSelect}
            />
            <Button type="submit" text="Guardar" className="save-card-btn" />
        </form>
        <span className="close" onClick={handleClose}>
            <MdClose />
        </span>
    </div>
}

export default AddGiftCard;