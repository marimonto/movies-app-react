import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';

import { MdClose } from 'react-icons/md';

import Input from '../../components/input';
import Select from '../../components/select';
import Button from '../../components/button';
import { giftCardsActions } from "../../../redux/gift-cards/actions";

import './styles.scss';
const AddGiftCard = ({ handleClose }) => {
    const [id, setId] = useState("");
    const giftCardValues = useSelector((state) => state.giftCards.constants.giftCardsValues)
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        giftCardValues.length && setValue(giftCardValues[0])
    }, [giftCardValues]);

    const handleInput = (event) => {
        setId(event.target.value);
    };

    const handleSelect = (event) => {
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

AddGiftCard.prototype = {
    handleChange: PropTypes.func,
}

export default AddGiftCard;