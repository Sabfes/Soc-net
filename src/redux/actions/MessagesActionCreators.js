import {ADD_MESSAGE, NEW_MESSAGE_TEXT} from "./ActionTypes";

export const addNewMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}


export const newMessageUpdate = (text) => {
    return {
        type: NEW_MESSAGE_TEXT, text
    }
}
