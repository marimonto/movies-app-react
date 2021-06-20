import { giftCardsConstants } from "../../constants/gift-cards.constants";
import { giftCardsService } from "../../services/gift-cards/gift-cards.service"

export const giftCardsActions = {
    getAll,
    getById,
    createCard,
    getValues,
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
    function success(giftCards) { return { type: giftCardsConstants.GET_ALL_SUCCESS, giftCards } }
    function failure(error) { return { type: giftCardsConstants.GET_ALL_FAILURE, error } }

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

    function request() { return { type: giftCardsConstants.POST_GIFT_CARD_REQUEST } }
    function success(giftCards) { return { type: giftCardsConstants.GET_ALL_SUCCESS, giftCards } }
    function failure(error) { return { type: giftCardsConstants.GET_ALL_FAILURE, error } }

}

function getValues() {
    return dispatch => {

        dispatch(request());

        giftCardsService.getValues()
            .then(
                values => {
                    dispatch(success(values));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );

    }

    function request() { return { type: giftCardsConstants.GET_VALUES_REQUEST } }
    function success(values) { return { type: giftCardsConstants.GET_VALUES_SUCCESS, values } }
    function failure(error) { return { type: giftCardsConstants.GET_VALUES_FAILURE, error } }

}

function showAddCard() {
    return { type: giftCardsConstants.SHOW_ADD_CARD }
}