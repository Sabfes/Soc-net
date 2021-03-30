import {ChatMessageType} from "../Pages/ChatPage/ChatPage";
import {StatusType} from "../redux/reducers/ChatReducer";

type EventsNamesType = 'message-received' | 'status-changed'
type MessagesReceivedSubscribersType = (messages: ChatMessageType[]) => void
type StatusReceivedSubscribersType = (status: StatusType) => void

let subscribers = {
    'message-received': [] as MessagesReceivedSubscribersType[],
    'status-changed': [] as StatusReceivedSubscribersType[]
}

let ws: WebSocket | null = null

const closeHandler = () => {
    notifySubscribersAboutStatus('pending')
    setTimeout(createChanel, 3000)
}
const newMessageHandler = (e: MessageEvent)=> {
    const newMessages = JSON.parse(e.data)
    subscribers['message-received'].forEach(s => s(newMessages))
};
const openHandler = ()=> {
    notifySubscribersAboutStatus('ready')
};
const errorHandler = ()=> {
    notifySubscribersAboutStatus('error')
};
function cleanUp() {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', newMessageHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}

const notifySubscribersAboutStatus = (status: StatusType) => {
    subscribers['status-changed'].forEach(s=>s(status))
}

function createChanel() {
    cleanUp()
    ws?.close()

    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus("pending")
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', newMessageHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
}

export const ChatApi = {
    start() {
        createChanel()
    },
    stop() {
        subscribers['message-received'] = []
        subscribers['status-changed'] = []
        cleanUp()
        ws?.close()
    },
    subscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscribersType | StatusReceivedSubscribersType) {
        // @ts-ignore
        subscribers[eventName].push(callback)

        return () => {
            // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
        }
    },
    unSubscribe(eventName: EventsNamesType,callback: MessagesReceivedSubscribersType | StatusReceivedSubscribersType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}
