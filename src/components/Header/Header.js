import React from "react"
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.Header}>
            <img className={classes.Header__image} src="https://img2.freepng.ru/20180520/vuo/kisspng-social-media-computer-icons-myspace-google-5b011c95614065.6964887515267995093984.jpg" alt="logo"/>
        </header>
    )
}

export default Header