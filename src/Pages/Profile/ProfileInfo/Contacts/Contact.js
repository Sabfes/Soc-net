import React from 'react'
import classes from './Contact.module.css'

const Contact = (props) => {
    return (
        <div className={classes.Contact}>
            {props.title}: <span className={classes.Contact__link}>{props.value || '-'}</span>
        </div>
    )
}

export default Contact