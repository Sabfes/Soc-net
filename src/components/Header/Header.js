import React from "react"
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.Header}>
            <span className={classes.Header__logo}>bitaev.SN</span>
        </header>
    )
}

export default Header