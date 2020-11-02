import React from 'react'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.Navbar}>
            <li><a href="">Profile</a></li>
            <li><a href="">Messages</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Music</a></li>
            <li><a href="">Settings</a></li>
        </nav>
    )
}

export default Navbar