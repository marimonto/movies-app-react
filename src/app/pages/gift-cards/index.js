/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import List from "../../components/list";
import { useDispatch, useSelector } from "react-redux";
import { giftCardsActions } from "../../../redux/gift-cards/actions";
import { headers, actions } from './constant';
import Input from "../../components/input";
import Button from "../../components/button";
import AddGiftCard from "../add-gift-card";
import { FaPlus } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';
import './styles.scss';
import DataNotFound from "../no-data-found";

const GiftCards = () => {
    const dispatch = useDispatch();
    const giftCardsList = useSelector((state) => state.giftCards.giftCards)
    const isShowAddCard = useSelector((state) => state.giftCards.isShowAddCard)
    const giftCardValues = useSelector((state) => state.giftCards.values)

    useEffect(() => {
        dispatch(giftCardsActions.getAll())
    }, []);

    useEffect(() => {
        isShowAddCard && !giftCardValues && dispatch(giftCardsActions.getValues())
    }, [isShowAddCard]);

    const handleClose = () => {
        dispatch(giftCardsActions.showAddCard())
    }

    const handleChange = (event) => {
        event.target.value ? dispatch(giftCardsActions.getById(event.target.value)) : dispatch(giftCardsActions.getAll())
    }

    return giftCardsList && <div className="gift-cards-container">
        <div className="gift-cards-column">
            <div className="search-row">
                <Input icon={<BiSearchAlt2 />} handleChange={handleChange}/>
                <Button className="add-button" text={<FaPlus />} handleClick={handleClose}/>
            </div>
            <div className="add-gift-card-row">
                {isShowAddCard && <AddGiftCard handleClose={handleClose} giftCardValues={giftCardValues}/>}
            </div>
            <div className="list-row">
                {giftCardsList.length ? <List headers={headers} list={giftCardsList} actions={actions} className={isShowAddCard && 'cut-card'} /> : <DataNotFound />}
            </div>
        </div>
    </div>
}

export default GiftCards;