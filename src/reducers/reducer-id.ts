import { UPDATE_ID } from '../action';
import type { Json, Message } from '../typings';

const initialState = 1;
type Action = {
    type: string;
    payload?: Json[] | Message | number;
};

export default function(state = initialState, action: Action) {
    switch (action.type) {
    case UPDATE_ID:
        return action.payload;
    default:
        return state;
    }
}
