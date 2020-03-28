import React from 'react';
import './index.css';
import { Routes } from './Router/Router';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Routes />
                </Router>
            </Provider>
        </>
    );
};

export default Main;
