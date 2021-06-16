import { create } from 'apisauce';

const STATUS_CODES = {
    unauthorized: 401
};

// Header authorization is added while login is finished
const api = create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 15000
});

// eslint-disable-next-line no-unused-vars, prettier/prettier
export const apiSetup = () => {
    api.addMonitor(response => {
        if (response.status === STATUS_CODES.unauthorized) {
            /*
             * These callbacks should only be called if no other callback was asigned for the response.
             * - dispatch(alertActions.error(i18next.t('apiErrors:expired')));
             */
        }
    });

    api.addMonitor(response => {
        if (response.problem === 'NETWORK_ERROR') {
            // These callbacks should only be called if no other callback was asigned for the response.
        }
    });
};

export default api;
