import { UPDATE_ID } from '../action';

const initialState = 1;

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ID:
      return action.payload;
    default:
      return state;
  }
}
