import { combineReducers } from 'redux'
import MessageReducer from './reducers/reducer-message'
import JSONReducer from './reducers/reducer-json'
import IDReducer from './reducers/reducer-id'

const rootReducer = combineReducers({
  json: JSONReducer,
  messages: MessageReducer,
  id: IDReducer
})

export default rootReducer
