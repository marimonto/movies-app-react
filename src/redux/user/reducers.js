import { userConstants } from "../../constants/user.constants";

const initialState = {
    user: null,
    userLoading: true,
    error: null,
    isloggedIn: false
}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
        case userConstants.GET_USER_REQUEST:
            return {
                ...initialState,
                userLoading: true,
            };
        case userConstants.LOGIN_SUCCESS:
        case userConstants.GET_USER_SUCCESS:
            return {
                ...state,
                userLoading: false,
                user: action.user,
                isloggedIn: true
            };
        case userConstants.LOGIN_FAILURE:

            return {
                ...initialState,
                userLoading: false,
                error: action.error,
            };
        case userConstants.LOGOUT:
            return {...initialState, userLoading: false,};
        default:
            return state;
    }
}