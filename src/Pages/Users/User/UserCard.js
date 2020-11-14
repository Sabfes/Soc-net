import React from 'react'
import classes from './UserCard.module.css'

const UserCard = props => {
    return (
        <div className={classes.UserCard}>
            <div className={classes.UserCard__left}>
                <img className={classes.UserCard__avatar} src={ props.imgUrl !== null ? props.imgUrl : 'https://yt3.ggpht.com/a/AATXAJzG5p_3KKV475sPi14UzJAG_8kzRo0BkJex7g=s900-c-k-c0xffffffff-no-rj-mo'} alt=""/>
                <button id={props.id} onClick={props.onClick} className={classes.UserCard__button} >{props.isFollow ? 'UNFOLLOW' : 'FOLLOW'}</button>
            </div>

            <div className={classes.UserCard__right}>
                <span>{props.name}</span>
                <span>{props.status}</span>
            </div>
        </div>
    )
}

export default UserCard