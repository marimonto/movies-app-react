import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './index';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('Navbar component tests', () => {
  let component = {};
  let store = {};
  const initialState = {};
  beforeEach(() => {
    store = mockStore(initialState);
    component = (
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
  });

  it('should render Navbar component and children components', () => {
    render(component);
    const logoMovies = screen.getByRole('img', {name: /logo movies/i})
    expect(logoMovies).toBeInTheDocument();

    const avatar = screen.getByRole('button')
    expect(avatar).toBeInTheDocument()
  });

  it('should dispatch USER_LOGOUT action', () => {
    render(component);
    const logoutOption = screen.getByTestId('logoutOption')
    const receivedActions = store.getActions();

    expect(receivedActions.length).toEqual(0);
  
    userEvent.click(logoutOption);
    expect(receivedActions.length).toEqual(1);
    const expectedPayload = { type: 'USER_LOGOUT' }
    expect(receivedActions).toEqual([expectedPayload])
  });


})
