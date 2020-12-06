import {ADD_MESSAGE} from "./ActionTypes";

export const addNewMessageActionCreator = (message) => {
    return {
        type: ADD_MESSAGE, message,
    }
}
