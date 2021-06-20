import { shape, string, number } from 'prop-types';

export const giftCard = shape({
    id: string,
    value: number,
    state: string,
    balance: number
});
