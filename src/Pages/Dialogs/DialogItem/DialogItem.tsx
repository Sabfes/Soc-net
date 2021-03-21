import React from 'react'
import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type PropsTypes = {
    id: Number,
    name: String,
}

const DialogItem: React.FC<PropsTypes> = ({id, name}) => {
    return (
        <NavLink
            className={classes.DialogItem}
            to={`/dialogs/${id}`}
            activeClassName={classes.DialogsItemActive}
        >
            {name}
        </NavLink>
    )
}

export default DialogItem
