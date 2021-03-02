import React from "react"
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

type PropsTypes = {
    logoutUser: () => void
    isAuth: boolean
}

const Header: React.FC<PropsTypes> = ({logoutUser, isAuth}) => {
    return (
        <header className={classes.Header}>
            <span className={classes.Header__logo}>bitaev.SN</span>

            {
                isAuth
                    ? <button onClick={logoutUser}>{'logout'}</button>
                    : <div>
                        <NavLink className={classes.Header__login} to={'/login'}>login</NavLink>
                    </div>
            }
        </header>
    )
}

export default Header