import {ChatMessageType} from "../../Pages/ChatPage/ChatPage";
import {ChatActionsTypes} from "../actions/ChatActionCreators";
import {MESSAGES_RECEIVED, STATUS_CHANGE} from "../actions/ActionTypes";

export type initialStateType = {
    messages: Array<ChatMessageType>
    status: string
}

export type StatusType = 'pending' | 'ready' | 'error';
const initialState: initialStateType = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType,
}

const ChatReducer = (state = initialState, action: ChatActionsTypes): initialStateType => {
    switch (action.type) {
        case MESSAGES_RECEIVED:
            return {
                ...state,
                messages: [...state.messages, ...(action.payload)]
            }
        case STATUS_CHANGE:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export default ChatReducer
