
export const giftCardsService = {
    getAll
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`/api/giftCards`, requestOptions).then(handleResponse)
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

