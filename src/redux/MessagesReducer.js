import {ADD_MESSAGE, NEW_MESSAGE_TEXT} from "./ActionTypes";

const MessagesReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const msg = {
                name: 'Dima',
                text: state.newMessageText
            }
            state.messages.push(msg)
            state.newMessageText = ''
            return state
        case NEW_MESSAGE_TEXT:
            state.newMessageText = action.text
            return state
        default:
            return state
    }
}

export default MessagesReducer


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
