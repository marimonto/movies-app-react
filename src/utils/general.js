export const numberWithDots = value => {
    const number = value || '0';
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
