import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './App';
import './index.css';
import reducers from './reducer';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
);
