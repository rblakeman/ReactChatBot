export const SET_JSON = 'SET_JSON';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const UPDATE_ID = 'UPDATE_ID';

import type { Message, Json } from './typings';

export function setJSON(data: Json) {
    return {
        type: SET_JSON,
        payload: data
    };
}

export function sendMessage(message: Message) {
    let data = message;

    return {
        type: SEND_MESSAGE,
        payload: data
    };
}

export function updateID(id: number) {
    if (id < 0) id = 0;

    return {
        type: UPDATE_ID,
        payload: id
    };
}
