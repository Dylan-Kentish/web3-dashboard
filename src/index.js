import React from "react";
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

const r = document.getElementById('root');
const root = createRoot(r);

root.render(
  <StrictMode>
    <MoralisProvider
      serverUrl={process.env.REACT_APP_SERVER_URL}
      appId={process.env.REACT_APP_APP_ID}>
      <App />
    </MoralisProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
