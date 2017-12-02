import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducers } from './reducers';
import { logger } from './middleware';
import thunk from "./middleware/thunk.middleware";

const appStore = createStore(
    appReducers,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
);

export default appStore;