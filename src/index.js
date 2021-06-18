import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { makeServer } from "./api/api";
import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById("root");

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

ReactDOM.render(

  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
  ,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
