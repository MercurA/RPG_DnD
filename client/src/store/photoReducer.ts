import { IActions, SEND_PHOTO } from "./types";

const photoState = {
    photo: null
}

export const photoReducer = (state=photoState, action: IActions) => {
    switch(action.type) {
        case SEND_PHOTO: {
            return {
                ...state,
                photo: action.payload
            }
        }
        default: {
            return state
        }
    }
}