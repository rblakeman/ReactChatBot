export type Message = {
    author: string;
    message: string;
    style?: 'password';
};

export type Json = {
    id: number;
    question: string;
    validation: boolean | string | string[];
    paths?: number | {};
    style?: string;
};

export type ReduxState = {
    id: number;
    messages: Message[];
    json: Json[];
};
