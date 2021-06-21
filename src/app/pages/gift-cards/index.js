/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

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
import { history } from "../../../redux/store";
import Loader from "../../components/loader";

const GiftCards = () => {
    const dispatch = useDispatch();
    const giftCards = useSelector((state) => state.giftCards.giftCards)
    const isShowAddCard = useSelector((state) => state.giftCards.isShowAddCard)
    const className = isShowAddCard ? 'cut-card': null
    const [giftCardsList, setGiftCardsList] = useState();

    useEffect(() => {
        dispatch(giftCardsActions.getAll())
    }, []);

    useEffect(() => {
        
        giftCards && setGiftCardsList(giftCards.map(item => {
            const { id, value, state, balance } = item
            return { id, value, state, balance };
        }))
        isShowAddCard && handleClose()
        
    }, [giftCards]);

    const handleClose = () => {
        dispatch(giftCardsActions.showAddCard())
    }

    const handleChange = (event) => {
        event.target.value ? dispatch(giftCardsActions.getById(event.target.value)) : dispatch(giftCardsActions.getAll())
    }

    const handleActionClick = (action, giftCard, event) => {
        event.preventDefault();
        if (action === 'sell') {
            giftCard.state === 'inactiva' ?
                history.push(`/gift-cards/sell/${giftCard.id}`)
                : history.push(`/gift-cards/edit/${giftCard.id}`)
        }

    }

    return giftCardsList ? <div className="gift-cards-container">
        <div className="gift-cards-column">
            <div className="search-row">
                <Input type="text" icon={<BiSearchAlt2 />} handleChange={handleChange} />
                <Button className="add-button" text={<FaPlus />} handleClick={handleClose} />
            </div>
            <div className="add-gift-card-row">
                {isShowAddCard && <AddGiftCard handleClose={handleClose} />}
            </div>
            <div className="list-row">
                {giftCardsList && giftCardsList.length > 0 ? <List
                    headers={headers}
                    list={giftCardsList}
                    actions={actions}
                    className={className}
                    handleActionClick={handleActionClick} /> : <DataNotFound />}
            </div>
        </div>
    </div> : <Loader/>
}

export default GiftCards;