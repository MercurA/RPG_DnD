import {CHECK_SERVER, SEND_PHOTO} from './types';
import {BASE_URI} from '../utils/constants';
import { ThunkAction } from 'redux-thunk';
import { GlobalState } from '.';
import { Action } from 'redux';

export const thunkSendMessage = (): ThunkAction<void, GlobalState, null, Action<string>> => async dispatch => {
    const res = await checkIfServerAlive();
    console.log(res)
    dispatch( sendMessage(res))
};

export function sendMessage(message: boolean){
    return {
        type: CHECK_SERVER,
        payload: message
    }
}

export const thunkSendPhoto = (photo: any): ThunkAction<void, GlobalState, null, Action<string>> => async dispatch => {
    const res = await sendPhoto(photo);

    dispatch(photoFromServer(res))
}

export function photoFromServer(photo: any) {
    return {
        type: SEND_PHOTO,
        payload: photo
    }
}

export function sendPhoto(photo: any): Promise<any> {
    console.log(photo);
    return fetch(`${BASE_URI}/photo`, {
        method: 'POST',
        body: photo
    }).then(response => response)
}

export function checkIfServerAlive(): Promise<boolean> {
    return fetch(`${BASE_URI}/check`)
        .then(response => response.json())
        .then(res => {
            return res.succesful ? true : false
        }).catch((error) => false);
}