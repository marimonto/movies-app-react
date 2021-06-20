/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/user/actions";
import { giftCardsActions } from "../redux/gift-cards/actions";

import Navbar from "./components/navbar";
import AppRoutesContainer from "./routes";




const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isloggedIn)
  useEffect(() => {
    dispatch(giftCardsActions.getConstants());
    if (!isLogged) {
      dispatch(userActions.getById());
    }
  }, []);
  return (
    <Fragment>
      {isLogged && <Navbar />}
      <AppRoutesContainer isloggedIn={isLogged} />
    </Fragment>
  )
}

export default App;
