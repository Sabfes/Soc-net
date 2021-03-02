import {ADD_MESSAGE} from "../actions/ActionTypes";

type InitialStateDialogsType = {
    name: string
    id: number
}
type InitialStateMessagesType = {
    name: string
    text: string
}
type InitialStateType = {
    dialogs: Array<InitialStateDialogsType>
    messages: Array<InitialStateMessagesType>
    newMessageText: string
}

const initialState: InitialStateType = {
    dialogs: [{name: 'Dima', id: 1}, {name: 'Lena', id: 2}, {name: 'Dimasol', id: 3}],
    messages: [
        {name: 'Dima', text: 'test steasd asd;ask asdkjl Asdj '},
        {name: 'Dima', text: 'test steasd asd;ask asdkjl Asdj '},
    ],
    newMessageText: '',
}


const MessagesReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const msg = {
                name: 'Dima',
                text: action.message
            }
            const msgs = [...state.messages]
            msgs.push(msg)
            return {
                ...state, messages: msgs , newMessageText: ''
            }
        default:
            return state
    }
}

export default MessagesReducer
