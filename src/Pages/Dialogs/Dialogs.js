import React from 'react'
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addNewMessageActionCreator, newMessageUpdate} from "../../redux/MessagesReducer";

const Dialogs = (props) => {

    return (
        <div className={classes.Dialogs}>
            <h1>Dialogs</h1>

            <div className={classes.Dialogs__container}>
                {/*Список диалогов*/}
                <div className={classes.Dialogs__lists}>
                    {
                        props.dialogs.map( (d,i)=> {
                            return <DialogItem key={i} name={d.name} id={d.id} />
                        })
                    }
                </div>

                {/*Сообщения*/}
                <div className={classes.Dialogs__messages}>

                    {
                        props.messages.map( (m, i) => {
                            return <Message key={i} name={m.name} text={m.text} />
                        })
                    }

                    <div>
                        <textarea
                            value={props.textAreaValue}
                            className={classes.Dialogs__textarea}
                            cols="30"
                            rows="10"
                            onChange={(e)=>props.dispatch(newMessageUpdate(e.target.value))}
                        >
                        </textarea>
                        <button onClick={()=> props.dispatch(addNewMessageActionCreator())}>Add message</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs