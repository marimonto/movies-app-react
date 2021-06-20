import { giftCardsConstants } from "../../constants/gift-cards.constants";
import { giftCardsService } from "../../services/gift-cards/gift-cards.service"

export const giftCardsActions = {
    getAll,
    getById,
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
                    console.log('error', error);
                }
            );

    }
    function success(giftCards) { return { type: giftCardsConstants.GET_ALL_SUCCESS, giftCards } }
}


function showAddCard() {
    return { type: giftCardsConstants.SHOW_ADD_CARD }
}