import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

// 引入ant design CSS
import 'antd/dist/antd.min.css';
import './assets/css/App.css'

import Routers from './routers/index';
import {yangAjax} from "./assets/Service/yangAjax";

import registerServiceWorker from './registerServiceWorker';
import {yangAjax} from "./assets/Service/yangAjax";

React.ajax = yangAjax;

ReactDOM.render( <Routers  />, document.getElementById('root'));
registerServiceWorker();
