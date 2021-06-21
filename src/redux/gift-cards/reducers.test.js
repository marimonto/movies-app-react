import reducer from './reducers';
import { giftCards } from '../../api/_mocks_/gift-cards'
import { constants } from '../../api/_mocks_/constants'

const initialState = {
    giftCards: null,
    giftCardsLoading: true,
    constants: {
        giftCardsValues: [],
        documentTypes: [],
        shop: []
    },
    constantsLoading: true,
    isShowAddCard: false
}

describe('GiftCardsReducer Reducers', () => {
    it('Return initial State', () => {
        expect(reducer(initialState, '')).toEqual(initialState);
    });

    it('GET_ALL_REQUEST', async () => {
        const action = {
            type: '@GIFT_CARDS/GET_ALL_REQUEST'
        };
        await expect(reducer(initialState, action)).toEqual({
            ...initialState,
            giftCardsLoading: true
        });
    });
    it('GET_BY_ID_SUCCESS', async () => {
        const action = {
            type: '@GIFT_CARDS/GET_BY_ID_SUCCESS',
            giftCards: [giftCards[0], giftCards[1]]
        };
        await expect(reducer(initialState, action)).toEqual({
            ...initialState,
            giftCards: action.giftCards,
            giftCardsLoading: false
        });
    });

    it('GET_ALL_SUCCESS', async () => {
        const action = {
            type: '@GIFT_CARDS/GET_ALL_SUCCESS',
            giftCards: giftCards
        };
        await expect(reducer(initialState, action)).toEqual({
            ...initialState,
            giftCards: action.giftCards,
            giftCardsLoading: false
        });
    });
    it('GET_ALL_FAILURE', async () => {
        const action = {
            type: '@GIFT_CARDS/GET_ALL_FAILURE'
        };
        await expect(reducer(initialState, action)).toEqual({
            ...initialState
        });
    });
    it('GET_BY_ID_FAILURE', async () => {
        const action = {
            type: '@GIFT_CARDS/GET_BY_ID_FAILURE'
        };
        await expect(reducer(initialState, action)).toEqual({
            ...initialState,
        });
    });
    it('GET_CONSTANTS_REQUEST', async () => {
        const action = {
            type: '@GIFT_CARDS/GET_CONSTANTS_REQUEST'
        };
        await expect(reducer(initialState, action)).toEqual({
            ...initialState,
            constantsLoading: true
        });
    });

    it('GET_CONSTANTS_SUCCESS', async () => {
        const action = {
            type: '@GIFT_CARDS/GET_CONSTANTS_SUCCESS',
            data: constants
        };
        await expect(reducer(initialState, action)).toEqual({
            ...initialState,
            constants: action.data,
            constantsLoading: false
        });
    });
    it('GET_CONSTANTS_FAILURE', async () => {
        const action = {
            type: '@GIFT_CARDS/GET_CONSTANTS_FAILURE'
        };
        await expect(reducer(initialState, action)).toEqual({
            ...initialState,
            constants: initialState.constants,
            constantsLoading: false
        });
    });
    it('SHOW_ADD_CARD', async () => {
        const action = {
            type: '@GIFT_CARDS/SHOW_ADD_CARD'
        };
        await expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isShowAddCard: !initialState.isShowAddCard
        });
    });
});
