import React from 'react'
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addNewMessageActionCreator} from "../../redux/actions/MessagesActionCreators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AddMsgFormRedux} from "./MsgFormRedux/MsgFormRedux";
import {AppStateType} from "../../redux/redux-store";

type DialogType = {
    name: string
    id: number
}

type MessagesType = {
    name: string
    text: string
}

type PropsTypes = {
    isAuth: boolean
    addNewMessageActionCreator: (newMessage: string) => void
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
}

const Dialogs: React.FC<PropsTypes> = ({isAuth, messages,dialogs,addNewMessageActionCreator}) => {
    const addNewMsg = (s: any): void => {
        addNewMessageActionCreator(s.newMsg)
    }

    if (!isAuth) return <Redirect to={'/login'} />

    return (
        <div className={classes.Dialogs}>
            <h1>Dialogs</h1>

            <div className={classes.Dialogs__container}>
                {/*Список диалогов*/}
                <div className={classes.Dialogs__lists}>
                    {
                        dialogs.map( (d,i)=> {
                            return <DialogItem key={i} name={d.name} id={d.id} />
                        })
                    }
                </div>

                {/*Сообщения*/}
                <div className={classes.Dialogs__messages}>

                    {
                        messages.map( (m, i) => {
                            return <Message key={i} name={m.name} text={m.text} />
                        })
                    }

                    <AddMsgFormRedux onSubmit={addNewMsg}/>
                </div>

            </div>
        </div>
    )
}


function mapStateToProps(state: AppStateType) {
    return {
        messages: state.messagesPage.messages,
        dialogs: state.messagesPage.dialogs,
    }
}

export default compose(
    connect(mapStateToProps, {addNewMessageActionCreator}),
    withAuthRedirect,
)(Dialogs)
