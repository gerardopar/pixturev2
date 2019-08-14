// importing modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// importing components
import App from './App/App';
import configureStore from './store/configureStore';

// importing style sheet
import './styles/main.scss';

// redux store initialized
const store = configureStore();

// redux store provider
const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

// rendering app
ReactDOM.render(jsx, document.getElementById('app'));
