import {ADD_MESSAGE} from "./ActionTypes";

type AddNewMessageActionCreatorType = {
    type: typeof ADD_MESSAGE
    message: string
}

export const addNewMessageActionCreator = (message: string): AddNewMessageActionCreatorType => {
    return {
        type: ADD_MESSAGE, message,
    }
}
