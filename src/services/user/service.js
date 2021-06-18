
export const userService = {
    login,
    logout,
    getById
};

function login(userName, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, password })
    };
    return fetch("/api/login", requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('userId', JSON.stringify(user.userUuid));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('userId');
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`/api/user/${id}`, requestOptions)
        .then(handleResponse)
}



function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }

            let error = (data && data.message) || response.statusText ;
            if (error === "Unauthorized") {
                error = 'Usuario y/o contraseña inválido'
            }
            return Promise.reject(error);
        }
        return data;
    });
}