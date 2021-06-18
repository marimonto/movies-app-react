import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/user/actions";

import Navbar from "./components/navbar/navbar";
import AppRoutesContainer from "./routes";




const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (!user) {
      dispatch(userActions.getById());
    }
  }, [dispatch, user]);
  return (
    <Fragment>
      {user && <Navbar />}
      <AppRoutesContainer isloggedIn={user} />
    </Fragment>
  )
}

export default App;
