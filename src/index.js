import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import { makeServer } from "./api/api";

const rootElement = document.getElementById("root");

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
