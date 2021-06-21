import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './index';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';


const middlewares = [];
const mockStore = configureMockStore(middlewares);

const route = '/gift-cards/edit/11';
const history = createMemoryHistory({ initialEntries: [route] });
describe('Navbar component tests', () => {
  let component = {};
  let store = {};
  const initialState = {};
  beforeEach(() => {
    store = mockStore(initialState);
    component = (
    

      <Provider store={store}>
        <Router history={history}>
          <Navbar />
        </Router>
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
    const expectedPayload = { type: '@@USER/LOGOUT' }
    expect(receivedActions).toEqual([expectedPayload])
  });

  it('should call handleClickLogo and redirect', () => {
    render(component);
    const logoMovies = screen.getByRole('img', { name: /logo movies/i })
    expect(logoMovies).toBeInTheDocument();
    expect(history.location.pathname).toBe(route);
    userEvent.click(logoMovies)
    const expectLocationPathname = "/gift-cards"
    expect(history.location.pathname).toBe(expectLocationPathname);
  });

 
})
