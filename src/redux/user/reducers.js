import { userConstants } from "../../constants/user.constants";

const initialState = {
    loggingIn: false,
    user: {},
    userLoading: false,
    error: null
}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...initialState,
                userLoading: true,
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                userLoading: false,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:

            return {
                ...initialState,
                error: action.error,
            };
        case userConstants.LOGOUT:
            return initialState;
        default:
            return state;
    }
}