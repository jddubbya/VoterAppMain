/* 
* Name: main.jsx
* Type: 
* Arguments: none
* Description: The entry point for VoCheck
*/

// Imports ///////////////////////////////////////////////////
// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import store from "../Redux/store.cjs";
import { Provider } from "react-redux";
// VoCheck
import App from './App.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
);
