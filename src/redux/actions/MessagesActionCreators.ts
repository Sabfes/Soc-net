import {ADD_MESSAGE} from "./ActionTypes";

export type MessagesActionsTypes = AddNewMessageActionCreatorType

type AddNewMessageActionCreatorType = {
    type: typeof ADD_MESSAGE
    message: string
}

export const addNewMessageActionCreator = (message: string): AddNewMessageActionCreatorType => {
    return {
        type: ADD_MESSAGE, message,
    }
}
