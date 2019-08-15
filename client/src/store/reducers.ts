import {CHECK_SERVER, IActions, SEND_PHOTO} from './types';
import IServerState from './interfaces/IGlobalState';

const initialState: IServerState = {
    isServerAlive: false,
}

export function serverReducer(state=initialState, action: IActions): IServerState {
    switch(action.type) {
        case CHECK_SERVER: {
            return {
                ...state,
                isServerAlive: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

