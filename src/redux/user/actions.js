import { userConstants } from "../../constants/user.constants";
import { userService } from "../../services/user/service";
import { history } from "../store";

export const userActions = {
    login,
    logout
};

function login(username, password) {
    if (!username) {
        return dispatch => {
            dispatch(failure('Ingrese un usuario válido'));
        }
    }

    if (!password) {
        return dispatch => {
            dispatch(failure('Ingrese una contraseña válido'));
        }
    }
    return dispatch => {

        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/gift-cards');
                },
                error => {
                    if (error === "Unauthorized") {
                       return dispatch(failure('Usuario y/o contraseña invalido')); 
                    }
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
