export const SEND_PHOTO = 'SEND_PHOTO';
export const CHECK_SERVER = 'CHECK_SERVER';

interface CHECK_SERVER {
    type: typeof CHECK_SERVER;
    payload: boolean
}

interface SEND_PHOTO {
    type: typeof SEND_PHOTO,
    payload: any
}

export type IActions = CHECK_SERVER | SEND_PHOTO;
