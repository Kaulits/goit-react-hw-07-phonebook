import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import 'modern-normalize';

import { Global } from './styles/Global';
import { Provider } from 'react-redux';

import {  store } from './redux/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store={store}>
        <App /> <Global />
   
    </Provider>

 
);