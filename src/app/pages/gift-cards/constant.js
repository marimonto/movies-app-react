import { FaShoppingCart, FaEye } from 'react-icons/fa';

export const headers = ['Id', 'Valor', 'Estado', 'Saldo', 'Acciones'];

export const actions = [{
    action: 'sell',
    icon: <FaShoppingCart />
},
{
    action: 'detail',
    icon: <FaEye />
}]