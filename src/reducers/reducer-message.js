import { SEND_MESSAGE } from '../action';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
}
