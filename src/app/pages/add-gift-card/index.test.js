import { fireEvent, render, screen } from '@testing-library/react';
import AddGiftCard from './index';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import userEvent from '@testing-library/user-event';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('AddGiftCard component tests', () => {
    let component = {};
    let store = {};
    const initialState = {
        giftCards: {constants: {giftCardsValues: [1,2,3]}}
    }
    beforeEach(() => {
        store = mockStore(initialState);
        component = (
            <Provider store={store}>
                <AddGiftCard />
            </Provider>
        );
    });

    it('should render Login component and children components', () => {
        render(component);

        const idInput= screen.getByRole('textbox', { name: /Id/i })
        expect(idInput).toBeInTheDocument();
        expect(idInput).not.toHaveValue();

        const valueSelect = screen.getByRole('combobox', { name: /Valor/i })
        expect(valueSelect).toBeInTheDocument();
        expect(valueSelect).toHaveValue('1');

        const submitButton = screen.getByRole('button', { name: /guardar/i })
        expect(submitButton).toBeInTheDocument();

    });

    it('should setId when type on idInput', () => {
        render(component);

        const idInput = screen.getByRole('textbox', { name: /Id/i })
        expect(idInput).not.toHaveValue();
        userEvent.type(idInput, 'id');
        expect(idInput).toHaveValue('id');

    });


    it('should setValue when change on valueSelect', () => {
        render(component);

        const valueSelect = screen.getByRole('combobox', { name: /Valor/i })
        expect(valueSelect).toHaveValue('1');
        fireEvent.change(valueSelect, {target: { value: "2" }});
        expect(valueSelect).toHaveValue('2');

    });


    it('should dispatch CREATE_GIFT_CARD_REQUEST when click submit button', () => {
        render(component);
        const submitButton = screen.getByRole('button', { name: /guardar/i })
        const receivedActions = store.getActions();

        const idInput = screen.getByRole('textbox', { name: /Id/i })
        userEvent.type(idInput, 'id');

        const valueSelect = screen.getByRole('combobox', { name: /Valor/i })
        fireEvent.change(valueSelect, { target: { value: "2" } });

        userEvent.click(submitButton);
        expect(receivedActions.length).toEqual(1);
        const expectedPayload = [{ type: '@GIFT_CARDS/CREATE_GIF_CARD_REQUEST' }]
        expect(receivedActions).toEqual(expectedPayload)
    });

});