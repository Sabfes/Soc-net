import React from 'react'
import classes from './Message.module.css'

const Message = (props) => {
    return (
        <div className={classes.Message}>
            <div className={classes.Message__info}>
                <img className={classes.Message__img} src="http://cdn.onlinewebfonts.com/svg/download_508630.png" alt="avatar"/>
                <span>{props.name}</span>
            </div>
            <p className={classes.Message__text}>{props.text}</p>
        </div>
    )
}

export default Message