import React from 'react'
import classes from './UserCard.module.css'
import {NavLink} from "react-router-dom";
import defaultAvatar from '../../../img/avatar-profile.png'

const UserCard = props => {
    return (
        <div className={classes.UserCard}>
            <div className={classes.UserCard__left}>
                <NavLink to={'/profile/' + props.id}>
                    <img className={classes.UserCard__avatar} src={ props.imgUrl !== null ? props.imgUrl : defaultAvatar} alt=""/>
                </NavLink>
                {
                    props.isFollow
                        ? <button
                            disabled={props.btnDisabled.some(i => i=== props.id) ? true : false}
                            id={props.id}
                            onClick={() => {props.unFollow(props.id)}}
                            className={classes.UserCard__button}
                        >
                            {"UNFOLLOW"}
                        </button>
                        : <button
                            disabled={props.btnDisabled.some(i => i=== props.id) ? true : false}
                            id={props.id}
                            onClick={() => {props.follow(props.id)}}
                            className={classes.UserCard__button}
                        >
                            {"FOLLOW"}
                        </button>
                }
            </div>

            <div className={classes.UserCard__right}>
                <span>{props.name}</span>
                <span>{props.status}</span>
            </div>
        </div>
    )
}

export default UserCard