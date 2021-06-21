import React from "react";
import {
    Route,
    Switch,
    withRouter,
    Redirect
} from "react-router-dom";
import PropTypes from 'prop-types';

import { excludedRoutes } from "../../constants/routes.constants";
import { PrivateRoute } from "./privateRoute";
import Login from "../pages/login";
import NotFound from "../pages/not-found";
import GiftCards from "../pages/gift-cards";
import EditGiftCard from "../pages/edit-gift-card";

import './styles.scss';
import SellGiftCard from "../pages/sell-gift-card";
import { Fragment } from "react/cjs/react.production.min";
import Navbar from "../components/navbar";

const AppRoutesContainer = ( { location, history }) => {
    const isLogged = JSON.parse(localStorage.getItem('userId'))
    const showNavbar = !excludedRoutes.includes(location.pathname)
    return (
        <Fragment>
            {showNavbar && <Navbar />}
            <main className={`body-container ${showNavbar && 'padding'}`}>
                <Switch>
                    <PrivateRoute exact path="/gift-cards" component={GiftCards} />
                    <PrivateRoute exact path="/gift-cards/sell/:id" component={SellGiftCard} />
                    <PrivateRoute exact path="/gift-cards/edit/:id" component={EditGiftCard} />
                    <Route exact path="/">
                        {isLogged ? <Redirect to="/gift-cards" /> : <Redirect to="/login" />}
                    </Route>
                    <Route exact path="/login">
                        {isLogged ? <Redirect to="/gift-cards" /> : <Login />}
                    </Route>
                    <Route path="*">
                        {isLogged ? <NotFound /> : <Redirect to="/login" />}
                    </Route>
                </Switch>
            </main>
    </Fragment>
        

    )
}
AppRoutesContainer.propTypes = {
    isloggedIn: PropTypes.bool.isRequired,
}
export default withRouter(AppRoutesContainer);
