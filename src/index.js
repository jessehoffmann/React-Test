import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './components/App';

// Styles
import './static/styles/index.css';

// Redux
import { Provider } from 'react-redux'
import store from './store'

// Nothing unique here except wrapping the app in a redux Provider components
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);