import { giftCardsConstants } from "../../constants/gift-cards.constants";
import { giftCardsService } from "../../services/gift-cards/gift-cards.service"

export const giftCardsActions = {
    getAll,
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

function showAddCard() {
    return { type: giftCardsConstants.SHOW_ADD_CARD }
}