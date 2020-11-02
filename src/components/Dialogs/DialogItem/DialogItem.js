import React from 'react'
import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink
            className={classes.DialogItem}
            to={`/dialogs/${props.id}`}
            activeClassName={classes.DialogsItemActive}
        >
            {props.name}
        </NavLink>
    )
}

export default DialogItem