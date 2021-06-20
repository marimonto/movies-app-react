import { giftCardsConstants } from "../../constants/gift-cards.constants";

const initialState = {
    giftCards: null,
    giftCardsLoading: false,
    isShowAddCard: false
}
export default function giftCardsReducer(state = initialState, action) {
    switch (action.type) {
        case giftCardsConstants.GET_ALL_REQUEST:
            return {
                ...state,
                giftCardsLoading: true
            };
        case giftCardsConstants.GET_ALL_SUCCESS:
            return {
                ...state,
                giftCardsLoading: false,
                giftCards: action.giftCards
            };
        case giftCardsConstants.GET_ALL_FAILURE:
            return initialState;
        
        case giftCardsConstants.SHOW_ADD_CARD:
            return {
                ...state,
                isShowAddCard: !state.isShowAddCard
            };
        default:
            return state;
    }
}