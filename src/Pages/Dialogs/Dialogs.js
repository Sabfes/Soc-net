import React from 'react'
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    const newPostText = React.createRef()

    const addNewPost = () => {
        console.log(newPostText.current.value)
    }

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
                        <textarea ref={newPostText} className={classes.Dialogs__textarea} name="" id="" cols="30" rows="10"></textarea>
                        <button onClick={addNewPost}>Add message</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs