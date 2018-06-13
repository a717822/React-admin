import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

// 引入ant design CSS
import 'antd/dist/antd.min.css';
import './assets/css/App.css'

import Routers from './routers/index';

import registerServiceWorker from './registerServiceWorker';
import {xmlhttp} from "./assets/Service/xmlhttp";

React.ajax = xmlhttp.method;

ReactDOM.render( <Routers  />, document.getElementById('root'));
registerServiceWorker();
