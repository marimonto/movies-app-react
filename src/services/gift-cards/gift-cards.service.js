
export const giftCardsService = {
    getAll,
    getById,
    createCard,
    sellCard,
    editCard,
    getConstants
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`/api/giftCards`, requestOptions).then(handleResponse)
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`/api/giftCard/${id}`, requestOptions).then(handleResponse)
}

function createCard(card) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(card)
    };

    return fetch(`/api/giftCard/`, requestOptions).then(handleResponse)
}


function sellCard(card) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(card)
    };

    return fetch(`/api/giftCard/sell`, requestOptions).then(handleResponse)
}

function editCard(card) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(card)
    };

    return fetch(`/api/giftCard/edit`, requestOptions).then(handleResponse)
}




function getConstants() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`/api/giftCards/constants`, requestOptions).then(handleResponse)
}


function handleResponse(response) {
    return response.text().then(text => {

        const data = text && JSON.parse(text);
        if (!response.ok) {
            let error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

