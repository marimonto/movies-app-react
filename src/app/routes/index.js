import React from "react";
import {
    Route,
    Switch
} from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';

import { PrivateRoute } from "./privateRoute";
import Login from "../pages/login";
import Error404 from "../pages/error404";
import GiftCards from "../pages/gift-cards";
import { history } from "../../redux/store";
import EditGiftCard from "../pages/edit-gift-card";

import './styles.scss';
import SellGiftCard from "../pages/sell-gift-card";

const AppRoutesContainer = ({ isloggedIn}) => {
    
    return (
        <body className={`body-container ${isloggedIn && 'padding'}`}>
            <ConnectedRouter history={history}>
                <Switch>
                    <PrivateRoute exact path="/gift-cards" component={GiftCards} />
                    <PrivateRoute exact path="/gift-cards/sell/:id" component={SellGiftCard} />
                    <PrivateRoute exact path="/gift-cards/edit/:id" component={EditGiftCard} />
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
AppRoutesContainer.propTypes = {
    isloggedIn: PropTypes.bool.isRequired,
}
export default AppRoutesContainer;
