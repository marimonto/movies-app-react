import { fireEvent, render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import EditGiftCard from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('EditGiftCard component tests', () => {
    let component = {};
    let store = {};
    const initialState = {
        giftCards: {
            constants: {
                giftCardsValues: [1, 2, 3],
                shops: ['store 1', 'store 2']
            },
            giftCards: [
                {
                    id: '816-4168',
                    value: '50000',
                    state: 'activa',
                    balance: '0',
                    purchases: [
                        {
                            cardPayment: '50000',
                            date: new Date(2021, 11, 17),
                            invoice: '1222',
                            shop: 'Movies la central'
                        }
                    ]
                }
            ]
        }
    }
    const route = '/gift-cards/edit/123';
    const history = createMemoryHistory({ initialEntries: [route]});

    beforeEach(() => {
        store = mockStore(initialState);
        component = (
            <Provider store={store}>
                <Router history={history}>
                    <EditGiftCard />
                </Router>
            </Provider>
        );
    });

    it('should render EditGiftCard component and children components', () => {
        render(component);

        const giftCard = initialState.giftCards.giftCards[0];

        const idInput= screen.getByRole('textbox', { name: /Id/i })
        expect(idInput).toBeInTheDocument();
        expect(idInput).toBeDisabled();
        expect(idInput).toHaveValue(giftCard.id);

        const valueInput = screen.getByRole('textbox', { name: /Saldo/i })
        expect(valueInput).toBeInTheDocument();
        expect(valueInput).toBeDisabled();
        expect(valueInput).toHaveValue(giftCard.balance);

        const cardPaymentInput = screen.getByRole('textbox', { name: /Valor pago con tarjeta/i })
        expect(cardPaymentInput).toBeInTheDocument();
        expect(cardPaymentInput).not.toBeDisabled();
        expect(cardPaymentInput).not.toHaveValue();

        const invoiceNumberInput = screen.getByRole('textbox', { name: /Número de la factura/i })
        expect(invoiceNumberInput).toBeInTheDocument();
        expect(invoiceNumberInput).not.toBeDisabled();
        expect(invoiceNumberInput).not.toHaveValue();

        const shopSelect = screen.getByRole('combobox', { name: /Tienda/i })
        expect(shopSelect).toBeInTheDocument();
        expect(shopSelect).toHaveValue('store 1');
        
        const submitButton = screen.getByRole('button', { name: /guardar/i })
        expect(submitButton).toBeInTheDocument();

    });

    it('should setPurchase when changes on forms and call handleSubmit', () => {
        render(component);

        const cardPaymentInput = screen.getByRole('textbox', { name: /Valor pago con tarjeta/i })
        expect(cardPaymentInput).not.toHaveValue();
        userEvent.type(cardPaymentInput, '2000');
        expect(cardPaymentInput).toHaveValue('2000');

        const invoiceNumberInput = screen.getByRole('textbox', { name: /Número de la factura/i })
        expect(invoiceNumberInput).not.toHaveValue();
        userEvent.type(invoiceNumberInput, 'abc');
        expect(invoiceNumberInput).toHaveValue('abc');

        const shopSelect = screen.getByRole('combobox', { name: /Tienda/i })
        expect(shopSelect).toHaveValue('store 1');
        fireEvent.change(shopSelect, { target: { value: "store 1" } });
        expect(shopSelect).toHaveValue('store 1');


        const submitButton = screen.getByRole('button', { name: /guardar/i })
        const receivedActions = store.getActions();

        userEvent.click(submitButton);
        expect(receivedActions.length).toEqual(2);
        const expectedAction = { type: '@GIFT_CARDS/EDIT_GIFT_CARD_REQUEST' }
        expect(receivedActions[1]).toEqual(expectedAction)
    });

});