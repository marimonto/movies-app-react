import reducer from './reducers';
import { users } from '../../api/_mocks_/users'

describe('GiftCardsReducer Reducers', () => {

    const initialState = {
        user: null,
        userLoading: true,
        error: null,
        isloggedIn: false
    }

    it('Return initial State', () => {
        expect(reducer(initialState, '')).toEqual(initialState);
    });

    it('LOGIN_REQUEST', async () => {
        const action = {
            type: '@@USER/LOGIN_REQUEST'
        };
        await expect(reducer(initialState, action)).toEqual({
            ...initialState,
            userLoading: true,
        });
    });
    it('GET_USER_REQUEST', async () => {
        const action = {
            type: '@@USER/GET_USER_REQUEST'
        };
        await expect(reducer(initialState, action)).toEqual({
            ...initialState,
            userLoading: true,
        });
    });
    it('LOGIN_SUCCESS', async () => {
        const action = {
            type: '@@USER/LOGIN_SUCCESS',
            user: users[0]
        };
        await expect(reducer(initialState, action)).toEqual({
            ...initialState,
            userLoading: false,
            user: action.user,
            isloggedIn: true
        });
    });

    it('GET_USER_SUCCESS', async () => {
        const action = {
            type: '@@USER/GET_USER_SUCCESS',
            user: users[0]
        };
        await expect(reducer(initialState, action)).toEqual({
            ...initialState,
            userLoading: false,
            user: action.user,
            isloggedIn: true
        });
    });
    it('LOGIN_FAILURE', async () => {
        const action = {
            type: '@@USER/LOGIN_FAILURE',
            error: 'error'
        };
        await expect(reducer(initialState, action)).toEqual({
            ...initialState,
            userLoading: false,
            error: action.error,
        });
    });
    it('LOGOUT', async () => {
        const action = {
            type: '@@USER/LOGOUT'
        };
        await expect(reducer(initialState, action)).toEqual({
            ...initialState,
            userLoading: false
        });
    });
});