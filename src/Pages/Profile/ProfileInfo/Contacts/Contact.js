import React from 'react'
import classes from './Contact.module.css'

const Contact = (props) => {
    return (
        <div className={classes.Contact}>
            {props.title}:{props.value}
        </div>
    )
}

export default Contact