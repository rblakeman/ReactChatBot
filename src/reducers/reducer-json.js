import { SET_JSON } from '../action'

const initialState = {}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_JSON:
      return action.payload
    default:
      return state
  }
}
