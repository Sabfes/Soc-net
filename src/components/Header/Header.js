import React from "react"
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.Header}>
            <span className={classes.Header__logo}>bitaev.SN</span>

            {
                props.isAuth
                    ? <span>{props.login}</span>
                    : <div>
                        <NavLink className={classes.Header__login} to={'/login'}>login</NavLink>
                    </div>
            }
        </header>
    )
}

export default Header