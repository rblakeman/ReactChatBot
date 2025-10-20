import { combineReducers } from 'redux';

import IDReducer from './reducers/reducer-id';
import JSONReducer from './reducers/reducer-json';
import MessageReducer from './reducers/reducer-message';

const rootReducer = combineReducers({
    json: JSONReducer,
    messages: MessageReducer,
    id: IDReducer,
});

export default rootReducer;
