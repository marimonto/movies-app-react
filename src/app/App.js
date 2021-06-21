/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';

import { userActions } from "../redux/user/actions";
import { giftCardsActions } from "../redux/gift-cards/actions";
import Navbar from "./components/navbar";
import AppRoutesContainer from "./routes";
import { history } from "../redux/store";


const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isloggedIn) 

  useEffect(() => {
    if (!isLogged && JSON.parse(localStorage.getItem('userId'))) {
      dispatch(userActions.getById());
    }
  }, []);
  useEffect(() => {
    isLogged && dispatch(giftCardsActions.getConstants());
  }, [isLogged]);
  return (
    
    <ConnectedRouter history={history}>
      <AppRoutesContainer />
    </ConnectedRouter>
  )
}

export default App;
