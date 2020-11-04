import {ADD_MESSAGE, NEW_MESSAGE_TEXT} from "../actions/ActionTypes";

const initialState = {
    dialogs: [{name: 'Dima', id: 1}, {name: 'Lena', id: 2}, {name: 'Dimasol', id: 3}],
    messages: [
        {name: 'Dima', text: 'test steasd asd;ask asdkjl Asdj '},
        {name: 'Dima', text: 'test steasd asd;ask asdkjl Asdj '},
    ],
    newMessageText: '',
}


const MessagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const msg = {
                name: 'Dima',
                text: state.newMessageText
            }
            state.messages.push(msg)
            return {
                ...state, newMessageText: ''
            }
        case NEW_MESSAGE_TEXT:
            return {
                ...state, newMessageText: action.text,
            }
        default:
            return state
    }
}

export default MessagesReducer

