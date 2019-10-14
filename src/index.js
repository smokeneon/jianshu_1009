import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Globalstyle } from './style.js';
import { GlobalFontstyle } from './static/iconfont/iconfont';
ReactDOM.render(
    <div>
        <Globalstyle />
        <GlobalFontstyle />
        <App />
    </div>
    , document.getElementById('root'));

