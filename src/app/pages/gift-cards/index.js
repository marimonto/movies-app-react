/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import List from "../../components/list";
import { useDispatch, useSelector } from "react-redux";
import { giftCardsActions } from "../../../redux/gift-cards/actions";
import { headers, actions } from './constant';
import './styles.scss';
import Input from "../../components/input";
import Button from "../../components/button";
import { FaPlus } from 'react-icons/fa';
import AddGiftCard from "../add-gift-card";
const GiftCards = () => {
    const dispatch = useDispatch();
    const giftCardsList = useSelector((state) => state.giftCards.giftCards)

    useEffect(() => {
        dispatch(giftCardsActions.getAll())
    }, []);

    const handleClick = () => {
        dispatch(giftCardsActions.showAddCard())
    }

    return <div className="gift-cards-container">
        <div className="gift-cards-column">
            <div className="search-row">
                <Input />
                <Button className="add-button" text={<FaPlus />} handleClick={handleClick}/>
            </div>
            <div className="add-gift-card-row">
                <AddGiftCard />
            </div>
            <div className="list-row">
                {giftCardsList && <List headers={headers} list={giftCardsList} actions={actions}/>}
            </div>
        </div>
    </div>
}

export default GiftCards;