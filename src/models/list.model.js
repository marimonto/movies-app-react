import { shape, string, number, element } from 'prop-types';

export const actions = shape({
    key: number,
    action: string,
    icon: element
});
