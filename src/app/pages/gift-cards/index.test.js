import { fireEvent, render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import GiftCards from './index';
import { giftCards } from '../../../api/_mocks_/gift-cards';
import { constants } from '../../../api/_mocks_/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('GiftCards component tests', () => {
    let component = {};
    let store = {};
    const initialState = {
        giftCards: {
            constants: constants,
            giftCards: giftCards,
            isShowAddCard: false
        }
    }
    const route = '/gift-cards';
    const history = createMemoryHistory({ initialEntries: [route] });

    beforeEach(() => {
        store = mockStore(initialState);
        store.clearActions(); 
        component = (
            <Provider store={store}>
                <Router history={history}>
                    <GiftCards />
                </Router>
            </Provider>
        );
    });

    it('should render GiftCards component and children components', () => {
        const { container } = render(component);

        const searchInput = screen.getByRole('textbox');
        expect(searchInput).toBeInTheDocument();

        const addGiftCardButton = screen.getByRole('button');
        expect(addGiftCardButton).toBeInTheDocument();

        const listRow = container.querySelector('div > div > div> div:nth-child(3)')
        const section = listRow.querySelector('div > section')
        expect(listRow).toBeInTheDocument();
        expect(listRow).toContainElement(section)

    });

    it('should call action when componentDidMount', () => {
        render(component);
        const receivedActions = store.getActions();
        console.log(receivedActions);
        const expectedActions = [{ type: '@GIFT_CARDS/GET_ALL_REQUEST' }]
        expect(receivedActions.length).toEqual(1);
        expect(receivedActions).toEqual(expectedActions)
    });


    it('should call handleChange when type in search input, and call actions', () => {
  
        render(component);
        const searchInput = screen.getByRole('textbox');
        fireEvent.change(searchInput, {
            target: { value: "b" },
        });
        fireEvent.change(searchInput, {
            target: { value: null },
        });
        const receivedActions = store.getActions();
        const expectedActions = [
            { type: '@GIFT_CARDS/GET_ALL_REQUEST' },
            { type: '@GIFT_CARDS/GET_BY_ID_REQUEST' },
            { type: '@GIFT_CARDS/GET_ALL_REQUEST' },
        ]
        expect(receivedActions[0]).toEqual(expectedActions[0]);
        expect(receivedActions[1]).toEqual(expectedActions[1]);
        expect(receivedActions[2]).toEqual(expectedActions[2]);

    });

    it('should call handleActionClick when click in action button, and redirect to sell', () => {
        render(component);
        expect(history.location.pathname).toBe('/gift-cards');
        const actionButton = screen.getByTestId('1_262-6799');
        userEvent.click(actionButton)
        const expectLocationPathname = "/gift-cards/sell/262-6799"
        expect(history.location.pathname).toBe(expectLocationPathname);
    });

    it('should call handleActionClick when click in action button, and redirect to edit', () => {
        render(component);
        history.push('/gift-cards')
        expect(history.location.pathname).toBe("/gift-cards");
        const actionButton = screen.getByTestId('1_497-6399');
        userEvent.click(actionButton)
        const expectLocationPathname = "/gift-cards/edit/497-6399";
        expect(history.location.pathname).toBe(expectLocationPathname);
    });
   


    it('should render AddGiftCard and call showAddCard when click close', () => {
        const newInitialState = JSON.parse(JSON.stringify(initialState))
        newInitialState.giftCards.isShowAddCard = true;
        store = mockStore(newInitialState);
        const { container } = render(
            <Provider store={store}>
                <Router history={history}>
                    <GiftCards />
                </Router>
            </Provider>);
        const receivedActions = store.getActions();

        const addGiftCardRow = container.querySelector('div > div > div> div:nth-child(2)')
        const addGiftCardContainer = addGiftCardRow.querySelector('div')
        const addGiftCardButton = addGiftCardContainer.querySelector('span > svg > path')

        expect(addGiftCardRow).toHaveClass('add-gift-card-row')
        expect(addGiftCardContainer).toHaveClass('add-gift-card')
        expect(addGiftCardRow).toContainElement(addGiftCardContainer)

        console.log(receivedActions);
        expect(receivedActions.length).toEqual(2);

        userEvent.click(addGiftCardButton);
        expect(receivedActions.length).toEqual(3);
        const expectedAction = { "type": "@GIFT_CARDS/SHOW_ADD_CARD" }
        expect(receivedActions[2]).toEqual(expectedAction)
        store.clearActions();
    });
    
    it('should render loader', () => {
        const newInitialState = JSON.parse(JSON.stringify(initialState))
        newInitialState.giftCards.giftCards = null;
        store = mockStore(newInitialState);
        render(
            <Provider store={store}>
                <Router history={history}>
                    <GiftCards />
                </Router>
            </Provider>);
        const loader = screen.getAllByTestId('loader')
        expect(loader).toBeTruthy();
    });

    it('should render DataNotFound', () => {
        const newInitialState = JSON.parse(JSON.stringify(initialState))
        newInitialState.giftCards.giftCards = [];
        store = mockStore(newInitialState);
        render(
            <Provider store={store}>
                <Router history={history}>
                    <GiftCards />
                </Router>
            </Provider>);
        const warning = screen.getByText(/no se encontró ninguna tarjeta de regalo/i)
        expect(warning).toBeInTheDocument();
    });



});