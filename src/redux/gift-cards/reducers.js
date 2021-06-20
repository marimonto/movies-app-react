import { giftCardsConstants } from "../../constants/gift-cards.constants";

const initialState = {
    giftCards: [],
    giftCardsLoading: false,
    constants: {
        giftCardsValues:[],
        documentTypes:[],
        shop: []
    },
    constantsLoading: true,
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
        case giftCardsConstants.GET_BY_ID_SUCCESS:
            return {
                ...state,
                giftCardsLoading: false,
                giftCards: action.giftCards
            };
        case giftCardsConstants.GET_ALL_FAILURE:
        case giftCardsConstants.GET_BY_ID_FAILURE:
            return initialState;
        case giftCardsConstants.GET_CONSTANTS_REQUEST:
            return {
                ...state,
                constantsLoading: true
            };
        case giftCardsConstants.GET_CONSTANTS_SUCCESS:
            return {
                ...state,
                constants: action.data,
                constantsLoading: false
            };
        case giftCardsConstants.GET_CONSTANTS_FAILURE:
            return {
                ...state,
                constants: initialState.constants,
                constantsLoading: false
            };
        case giftCardsConstants.SHOW_ADD_CARD:
            return {
                ...state,
                isShowAddCard: !state.isShowAddCard
            };
        default:
            return state;
    }
}