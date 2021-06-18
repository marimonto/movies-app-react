import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, ...rest }) => {
        const user = useSelector((state) => state.user.user);
        const userLoading = useSelector((state) => state.user.userLoading);
        return (!userLoading && <Route {...rest} render={props => {

                return user || localStorage.getItem('userId')
                        ? <Component {...props} />
                        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }} />
        )
}