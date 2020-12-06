import {ADD_MESSAGE} from "../actions/ActionTypes";

const initialState = {
    dialogs: [{name: 'Dima', id: 1}, {name: 'Lena', id: 2}, {name: 'Dimasol', id: 3}],
    messages: [
        {name: 'Dima', text: 'test steasd asd;ask asdkjl Asdj '},
        {name: 'Dima', text: 'test steasd asd;ask asdkjl Asdj '},
    ],
}


const MessagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const msg = {
                name: 'Dima',
                text: action.message
            }
            const msgs = [...state.messages]
            msgs.push(msg)
            return {
                ...state, messages: msgs ,newMessageText: ''
            }
        default:
            return state
    }
}

export default MessagesReducer

