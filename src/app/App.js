import React from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import { Provider } from "react-redux";
import store, { history } from "../redux/store";
import { ConnectedRouter } from 'connected-react-router';

import Login from "./pages/login";
import Error404 from "./pages/error404";
import GiftCards from "./pages/gift-cards";
import { PrivateRoute } from "./components/privateRoute";



const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>

        <Switch>
          <PrivateRoute exact path="/gift-cards" component={GiftCards} />
          <Route exact path="/login" component={Login} />
          <Route exact path="*" component={Error404} />
        </Switch>

      </ConnectedRouter>
    </Provider>

  )
}

export default App;
