import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/actions/ChatActionCreators";
import {AppStateType} from "../../redux/redux-store";
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
    const dispatch = useDispatch()
    const status = useSelector((state:AppStateType) => state.chat.status)

    useEffect( ()=> {
        dispatch(startMessagesListening())

        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return (
        <div>
            {status === 'error'
                ? <div>Error. Please refresh the page</div>
                : <>
                    <Messages />
                    <AddMessageForm />
                </>
            }

        </div>
    )
}

const Messages: React.FC = () => {
    const messages = useSelector((state:AppStateType) => state.chat.messages )


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

const AddMessageForm: React.FC = () => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState('')

    const status = useSelector((state:AppStateType) => state.chat.status)
    console.log(status)
    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }
    return (
        <div>
            <div>
                <textarea onChange={e => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button disabled={status !== 'ready'} onClick={sendMessageHandler}>send</button>
            </div>
        </div>
    )
}

export default ChatPage
