import { giftCardsConstants } from "../../constants/gift-cards.constants";
import { giftCardsService } from "../../services/gift-cards/gift-cards.service"
import { history } from "../store";

export const giftCardsActions = {
    getAll,
    getById,
    createCard,
    sellCard,
    editCard,
    getConstants,
    showAddCard
};


function getAll() {
    return dispatch => {

        dispatch(request());

        giftCardsService.getAll()
            .then(
                giftCards => {
                    dispatch(success(giftCards));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );

    }

    function request() { return { type: giftCardsConstants.GET_ALL_REQUEST } }
    function success(giftCards) { return { type: giftCardsConstants.GET_ALL_SUCCESS, giftCards } }
    function failure(error) { return { type: giftCardsConstants.GET_ALL_FAILURE, error } }

}

function getById(id) {
    return dispatch => {
        dispatch(request());
        giftCardsService.getById(id)
            .then(
                giftCards => {
                    dispatch(success(giftCards));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );

    }
    function request() { return { type: giftCardsConstants.GET_BY_ID_REQUEST } }
    function success(giftCards) { return { type: giftCardsConstants.GET_BY_ID_SUCCESS, giftCards } }
    function failure(error) { return { type: giftCardsConstants.GET_BY_ID_FAILURE, error } }

}


function createCard(card) {
    return dispatch => {
        dispatch(request());

        giftCardsService.createCard(card)
            .then(
                giftCards => {
                    dispatch(success(giftCards));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );

    }

    function request() { return { type: giftCardsConstants.CREATE_GIFT_CARD_REQUEST } }
    function success(giftCards) { return { type: giftCardsConstants.GET_ALL_SUCCESS, giftCards } }
    function failure(error) { return { type: giftCardsConstants.GET_ALL_FAILURE, error } }

}



function sellCard(card) {
    return dispatch => {
        dispatch(request());

        giftCardsService.sellCard(card)
            .then(
                giftCards => {
                    dispatch(success(giftCards));
                    history.push('/gift-cards');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );

    }

    function request() { return { type: giftCardsConstants.EDIT_GIFT_CARD_REQUEST } }
    function success(giftCards) { return { type: giftCardsConstants.GET_ALL_SUCCESS, giftCards } }
    function failure(error) { return { type: giftCardsConstants.GET_ALL_FAILURE, error } }

}


function editCard(card) {
    return dispatch => {
        dispatch(request());

        giftCardsService.editCard(card)
            .then(
                giftCards => {
                    dispatch(success(giftCards));
                    history.push('/gift-cards');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );

    }

    function request() { return { type: giftCardsConstants.EDIT_GIFT_CARD_REQUEST } }
    function success(giftCards) { return { type: giftCardsConstants.GET_ALL_SUCCESS, giftCards } }
    function failure(error) { return { type: giftCardsConstants.GET_ALL_FAILURE, error } }

}

function getConstants() {
    return dispatch => {

        dispatch(request());

        giftCardsService.getConstants()
            .then(
                data => {
                    dispatch(success(data.constants));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );

    }

    function request() { return { type: giftCardsConstants.GET_CONSTANTS_REQUEST } }
    function success(data) { return { type: giftCardsConstants.GET_CONSTANTS_SUCCESS, data } }
    function failure(error) { return { type: giftCardsConstants.GET_CONSTANTS_FAILURE, error } }

}

function showAddCard() {
    return { type: giftCardsConstants.SHOW_ADD_CARD }
}