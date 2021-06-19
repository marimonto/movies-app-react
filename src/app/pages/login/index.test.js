import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './index';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Login component tests', () => {
  let component = {};
  let store = {};
  const initialState = {
    user: {
      error: null
    }
  };
  beforeEach(() => {
    store = mockStore(initialState);
    component = (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });

  it('should render Login component and children components', () => {
    render(component);

    const logo = screen.getByRole('img', { name: /logo/i });
    expect(logo).toBeInTheDocument();

    const title = screen.getByRole('heading', { name: /ingresar con usuario y contraseña/i });
    expect(title).toBeInTheDocument();

    const userInput = screen.getByRole('textbox', { name: /usuario/i })
    expect(userInput).toBeInTheDocument();
    expect(userInput).not.toHaveValue();

    const passwordInput = screen.getByLabelText(/Contraseña/i);
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).not.toHaveValue();

    const submitButton = screen.getByRole('button', { name: /ingresar/i })
    expect(submitButton).toBeInTheDocument();

  });

  it('should setUserName when type on userInput', () => {
    render(component);

    const userInput = screen.getByRole('textbox', { name: /usuario/i })
    expect(userInput).not.toHaveValue();
    userEvent.type(userInput, 'user');
    expect(userInput).toHaveValue('user');

  });

  it('should setPassword when type on passwordInput', () => {
    render(component);

    const passwordInput = screen.getByLabelText(/Contraseña/i);
    expect(passwordInput).not.toHaveValue();

    userEvent.type(passwordInput, 'password');
    expect(passwordInput).toHaveValue('password');

  });

  it('should dispatch USER_LOGIN_FAILURE when click submit button without user', () => {
    render(component);
    const submitButton = screen.getByRole('button', { name: /ingresar/i })
    const receivedActions = store.getActions();

    expect(receivedActions.length).toEqual(0);
  
    userEvent.click(submitButton);
    expect(receivedActions.length).toEqual(1);
    const expectedPayload = [{
      error: 'Ingrese un usuario válido',
      type: 'USER_LOGIN_FAILURE'
    }]
    expect(receivedActions).toEqual(expectedPayload)
  });

  it('should dispatch USER_LOGIN_FAILURE when click submit button without password', () => {
    render(component);
    const submitButton = screen.getByRole('button', { name: /ingresar/i })
    const userInput = screen.getByRole('textbox', { name: /usuario/i })
    userEvent.type(userInput, 'user');
    userEvent.click(submitButton);
    
    const receivedActions = store.getActions();
    expect(receivedActions.length).toEqual(1);
    const expectedPayload = [{
      error: 'Ingrese una contraseña válido',
      type: 'USER_LOGIN_FAILURE'
    }]
    expect(receivedActions).toEqual(expectedPayload)
  });


  it('should dispatch USER_LOGIN_REQUEST when click submit button with user and password', () => {
    render(component);
    const submitButton = screen.getByRole('button', { name: /ingresar/i })
    const receivedActions = store.getActions();
    const userInput = screen.getByRole('textbox', { name: /usuario/i })
    userEvent.type(userInput, 'user');
    const passwordInput = screen.getByLabelText(/Contraseña/i);
    userEvent.type(passwordInput, 'password');

    userEvent.click(submitButton);
    expect(receivedActions.length).toEqual(1);
    const expectedPayload = [{ type: 'USER_LOGIN_REQUEST', user: { username: 'user' } }]
    expect(receivedActions).toEqual(expectedPayload)
  });


})
