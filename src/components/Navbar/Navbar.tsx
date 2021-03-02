import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type PropsType = {
    userId: number
}

const Navbar: React.FC<PropsType> = ({userId}) => {
    return (
        <nav className={classes.Navbar}>
            <NavLink
                className={classes.Navbar__link}
                to={'/profile/' + userId}
                activeClassName={classes.Navbar__linkActive}
            >
                Profile
            </NavLink>

            <NavLink
                className={classes.Navbar__link}
                to={'/dialogs'}
                activeClassName={classes.Navbar__linkActive}
            >
                Messages
            </NavLink>

            <NavLink
                className={classes.Navbar__link}
                to={'/users'}
                activeClassName={classes.Navbar__linkActive}
            >
                Users
            </NavLink>

            <NavLink
                className={classes.Navbar__link}
                to={'/news'}
                activeClassName={classes.Navbar__linkActive}
            >
                News
            </NavLink>

            <NavLink
                className={classes.Navbar__link}
                to={'/music'}
                activeClassName={classes.Navbar__linkActive}
            >
                Music
            </NavLink>

            <NavLink
                className={classes.Navbar__link}
                to={'/settings'}
                activeClassName={classes.Navbar__linkActive}
            >
                Settings
            </NavLink>

        </nav>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        userId: state.auth.userId,
    }
}

export default connect(mapStateToProps, null)(Navbar)