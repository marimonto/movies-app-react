import React from "react";
import {
    Route,
    Switch
} from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { ConnectedRouter } from 'connected-react-router';

import Login from "../pages/login";
import Error404 from "../pages/error404";
import GiftCards from "../pages/gift-cards";
import { PrivateRoute } from "../components/privateRoute";
import { history } from "../../redux/store";
import './styles.scss';

const AppRoutesContainer = ({ isloggedIn}) => {
    
    return (
        <body className={`body-container ${isloggedIn && 'test'}`}>
            <ConnectedRouter history={history}>
                <Switch>
                    <PrivateRoute exact path="/gift-cards" component={GiftCards} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/">
                        {isloggedIn ? <Redirect to="/gift-cards" /> : <Redirect to="/login" />}
                    </Route>
                    <Route exact path="*" component={Error404} />
                </Switch>
            </ConnectedRouter>
        </body>

    )
}

export default AppRoutesContainer;
