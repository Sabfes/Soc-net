import React from 'react'
import classes from './Contact.module.css'

type PropsTypes = {
    value: String,
    title: String
}

const Contact: React.FC<PropsTypes> = ({title, value}) => {
    return (
        <div className={classes.Contact}>
            {title}: <span className={classes.Contact__link}>{value || '-'}</span>
        </div>
    )
}

export default Contact
