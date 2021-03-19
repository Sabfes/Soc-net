import React from 'react'
import classes from './Message.module.css'

type PropsTypes = {
    name: String,
    text: String,
}

const Message: React.FC<PropsTypes> = ({name, text}) => {
    return (
        <div className={classes.Message}>
            <div className={classes.Message__info}>
                <img className={classes.Message__img} src="http://cdn.onlinewebfonts.com/svg/download_508630.png" alt="avatar"/>
                <span>{name}</span>
            </div>
            <p className={classes.Message__text}>{text}</p>
        </div>
    )
}

export default Message
