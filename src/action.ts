export const SET_JSON = 'SET_JSON';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const UPDATE_ID = 'UPDATE_ID';

export function setJSON(data) {
    return {
        type: SET_JSON,
        payload: data
    };
}

export function sendMessage(message) {
    let data = message;

    return {
        type: SEND_MESSAGE,
        payload: data
    };
}

export function updateID(id) {
    if (id < 0) id = 0;

    return {
        type: UPDATE_ID,
        payload: id
    };
}
