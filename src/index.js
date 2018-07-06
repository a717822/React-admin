import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Store} from "./assets/Store/Store";

// 引入ant design CSS
import 'antd/dist/antd.min.css';
import './assets/css/App.css'

import Routers from './routers/index';

import registerServiceWorker from './registerServiceWorker';
React.Store = Store;

ReactDOM.render( <Routers  />, document.getElementById('root'));
registerServiceWorker();
