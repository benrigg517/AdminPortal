import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from './main';

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

serviceWorker.unregister();
