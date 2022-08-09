import { SEND_MESSAGE } from '../action';
import type { Json, Message } from '../typings';

const initialState: Message[] = [];
type Action = {
    type: string;
    payload?: Json[] | Message | number;
};

export default function(state = initialState, action: Action) {
    switch (action.type) {
    case SEND_MESSAGE:
        return [...state, action.payload];
    default:
        return state;
    }
}
