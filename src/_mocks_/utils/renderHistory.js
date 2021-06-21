import React from 'react';
import { Route, Router } from 'react-router-dom';
import { render as rtlRender } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// test utils file

export function renderWithRouterMatch(
  ui,
  initialState,
  { path = '/', route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}
) {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);
  function wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route isExact path={path} component={children} />
        </Router>
      </Provider>
    );
  }
  return { container: rtlRender(ui, { wrapper }), history, store };
}
