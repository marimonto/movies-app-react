import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (<Route {...rest} render={props => {

    console.log(localStorage.getItem('user'));
   return localStorage.getItem('user')
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
}} />
)