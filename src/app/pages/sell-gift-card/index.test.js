import { fireEvent, render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SellGiftCard from './index';
import { constants } from '../../../api/_mocks_/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('SellGiftCard component tests', () => {
  let component = {};
  let store = {};
  const initialState = {
    giftCards: {
      constants: constants,
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
  const route = '/gift-cards/sell/123';
  const history = createMemoryHistory({ initialEntries: [route] });

  beforeEach(() => {
    store = mockStore(initialState);
    component = (
      <Provider store={store}>
        <Router history={history}>
          <SellGiftCard />
        </Router>
      </Provider>
    );
  });

  it('should render SellGiftCard component and children components', () => {
    render(component);

    const giftCard = initialState.giftCards.giftCards[0];

    const idInput = screen.getByRole('textbox', { name: /Id/i })
    expect(idInput).toBeInTheDocument();
    expect(idInput).toBeDisabled();
    expect(idInput).toHaveValue(giftCard.id);

    const valueInput = screen.getByRole('textbox', { name: /Valor/i })
    expect(valueInput).toBeInTheDocument();
    expect(valueInput).toBeDisabled();
    expect(valueInput).toHaveValue(giftCard.value);

    const shopperName = screen.getByRole('textbox', { name: /Nombre del comprador/i })
    expect(shopperName).toBeInTheDocument();
    expect(shopperName).not.toBeDisabled();
    expect(shopperName).not.toHaveValue();

    const cellphoneNumber = screen.getByRole('textbox', { name: /Número de celular/i })
    expect(cellphoneNumber).toBeInTheDocument();
    expect(cellphoneNumber).not.toBeDisabled();
    expect(cellphoneNumber).not.toHaveValue();

    const documentType = screen.getByRole('combobox', { name: /Tipo de documento/i })
    expect(documentType).toBeInTheDocument();
    expect(documentType).toHaveValue(constants.documentTypes[0]);

    const documentNumber = screen.getByRole('textbox', { name: /Número de documento/i })
    expect(documentNumber).toBeInTheDocument();
    expect(documentNumber).not.toBeDisabled();
    expect(documentNumber).not.toHaveValue();

    const buyerName = screen.getByRole('textbox', { name: /Nombre del vendedor/i })
    expect(buyerName).toBeInTheDocument();
    expect(buyerName).not.toBeDisabled();
    expect(buyerName).not.toHaveValue();

    const shop = screen.getByRole('combobox', { name: /Tienda/i })
    expect(shop).toBeInTheDocument();
    expect(shop).toHaveValue(constants.shops[0]);


    const submitButton = screen.getByRole('button', { name: /guardar/i })
    expect(submitButton).toBeInTheDocument();

  });

  it('should call action when componentDidMount', () => {
    render(component);
    const receivedActions = store.getActions();
    const expectedActions = [{ type: '@GIFT_CARDS/GET_BY_ID_REQUEST' }]
    expect(receivedActions.length).toEqual(1);
    expect(receivedActions).toEqual(expectedActions)
  });

  it('should fill out the form and submit, dispatch EDIT_GIFT_CARD_REQUEST', () => {
    render(component);

    const receivedActions = store.getActions();

    const shopperName = screen.getByRole('textbox', { name: /Nombre del comprador/i })
    const cellphoneNumber = screen.getByRole('textbox', { name: /Número de celular/i })
    const documentType = screen.getByRole('combobox', { name: /Tipo de documento/i })
    const documentNumber = screen.getByRole('textbox', { name: /Número de documento/i })
    const buyerName = screen.getByRole('textbox', { name: /Nombre del vendedor/i })
    const shop = screen.getByRole('combobox', { name: /Tienda/i })
    const submitButton = screen.getByRole('button', { name: /guardar/i })


    userEvent.type(shopperName, 'Juan');
    userEvent.type(cellphoneNumber, '123');
    fireEvent.change(documentType, { target: { value: "Pasaporte" } });
    userEvent.type(documentNumber, '123');
    userEvent.type(buyerName, 'Maria');
    fireEvent.change(shop, { target: { value: "Movies la centra" } });

    userEvent.click(submitButton);

    const expectedAction = { type: '@GIFT_CARDS/EDIT_GIFT_CARD_REQUEST' }
    expect(receivedActions.length).toEqual(2);
    expect(receivedActions[1]).toEqual(expectedAction)
  });
});