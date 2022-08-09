import { SET_JSON } from '../../action';
import type { Json, Message } from '../../typings';

const initialState: Message[] = [];
type Action = {
    type: string;
    payload?: Json[] | Message | number;
};

export default function(state = initialState, action: Action) {
    switch (action.type) {
    case SET_JSON:
        return action.payload;
    default:
        return state;
    }
}
