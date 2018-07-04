import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

// 引入ant design CSS
import 'antd/dist/antd.min.css';
import './assets/css/App.css'

import Routers from './routers/index';
import { yangAjax } from 'yangajax';

import registerServiceWorker from './registerServiceWorker';

React.ajax = yangAjax;

ReactDOM.render( <Routers  />, document.getElementById('root'));
registerServiceWorker();
