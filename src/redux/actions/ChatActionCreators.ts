import {MESSAGES_RECEIVED, STATUS_CHANGE} from "./ActionTypes";
import {ChatMessageType} from "../../Pages/ChatPage/ChatPage";
import {ChatApi} from "../../api/ChatApi";
import {Dispatch} from "redux";
import {AuthActionsTypes} from "./AuthActionCreators";
import {StatusType} from "../reducers/ChatReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";


export type ChatActionsTypes = SetMessagesType | StatusChangeType

type SetMessagesType = {
    type: typeof MESSAGES_RECEIVED
    payload: ChatMessageType[]
}

export const setMessages = (messages: ChatMessageType[]): SetMessagesType => {
    return {
        type: MESSAGES_RECEIVED,
        payload: messages,
    }
}

type StatusChangeType = {
    type: typeof STATUS_CHANGE
    status: string
}

export const statusChange = (status: StatusType): StatusChangeType => {
    return {
        type: STATUS_CHANGE,
        status: status,
    }
}

// THUNK CREATORS
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ChatActionsTypes>

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages => {
            dispatch(setMessages(messages))
        })
    }
    return _newMessageHandler
}

let _statusChangingHandler: ((status: StatusType) => void) | null = null
const statusChangingHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangingHandler === null) {
        _statusChangingHandler = (status )=> {
            dispatch(statusChange(status))
        }
    }
    return _statusChangingHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    ChatApi.start()
    ChatApi.subscribe('message-received', newMessageHandlerCreator(dispatch))
    ChatApi.subscribe('status-changed', statusChangingHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    ChatApi.unSubscribe('message-received', newMessageHandlerCreator(dispatch))
    ChatApi.unSubscribe('status-changed', statusChangingHandlerCreator(dispatch))
    ChatApi.stop()
}

export const sendMessage = (messages: string): ThunkType => async (dispatch) => {
   ChatApi.sendMessage(messages)
}
