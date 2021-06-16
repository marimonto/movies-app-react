import { createStore, applyMiddleware, compose } from "redux";
import createRootReducer  from "./reducer";
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

const middlewares = [thunk, routerMiddleware(history)];
const enhancers = [];

enhancers.push(applyMiddleware(...middlewares));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    createRootReducer(history),
    composeEnhancers(...enhancers)
);

export default store;