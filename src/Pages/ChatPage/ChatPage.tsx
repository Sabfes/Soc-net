import React, {useEffect, useState} from 'react'
// import classes from './ChatPage.module.css'


export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
type PropsTypes = {

}

const ChatPage: React.FC<PropsTypes> = (props) => {
    return (
        <div>
            <h1>chat</h1>
            <Chat />
        </div>
    )
}

const Chat: React.FC = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect( ()=> {
        let ws: WebSocket
        const closeHandler = () => {
            setTimeout(createChanel, 3000)
        }

        function createChanel() {
            ws?.removeEventListener('close', closeHandler)
            ws?.close()

            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }
        createChanel()

        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }
    }, [])


    return (
        <div>
            <Messages wsChannel={wsChannel}/>
            <AddMessageForm wsChannel={wsChannel}/>
        </div>
    )
}

const Messages: React.FC<{ wsChannel: WebSocket | null}> = ({wsChannel}) => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(()=> {
        let newMessageHandler = (e: MessageEvent)=> {
            setMessages((prevState => [...prevState, ...JSON.parse(e.data)]))
        };
        wsChannel?.addEventListener('message', newMessageHandler)

        return () => {
            wsChannel?.removeEventListener('message', newMessageHandler)
        }
    }, [wsChannel])

    return (
        <div style={{height: '400px', overflowY: 'auto'}}>
            {messages.map( (mes, index) => {
                 return <Message
                     key={index}
                     message={mes}
                 />
            })}
        </div>
    )
}
const Message: React.FC<{message:ChatMessageType}> = ({message}) => {
    return (
        <div>
            <img width={35} height={35} src={message.photo} alt="avatar"/>
            <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
}

const AddMessageForm: React.FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {
    const [message, setMessage] = useState('')
    const [readyStatus, setreadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect( ()=> {
        let openHandler = ()=> {
            setreadyStatus('ready')
        };
        wsChannel?.addEventListener('open', openHandler)

        return () => {
            wsChannel?.removeEventListener('open', openHandler)
        }
    }, [wsChannel])

    const sendMessage = () => {
        if (!message) {
            return
        } else {
            wsChannel?.send(message)
            setMessage('')
        }
    }
    return (
        <div>
            <div>
                <textarea onChange={e => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button disabled={wsChannel === null ||  readyStatus !== 'ready'} onClick={sendMessage}>send</button>
            </div>
        </div>
    )
}

export default ChatPage
