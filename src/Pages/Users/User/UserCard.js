import React from 'react'
import classes from './UserCard.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";

const UserCard = props => {
    return (
        <div className={classes.UserCard}>
            <div className={classes.UserCard__left}>
                <NavLink to={'/profile/' + props.id}>
                    <img className={classes.UserCard__avatar} src={ props.imgUrl !== null ? props.imgUrl : 'https://yt3.ggpht.com/a/AATXAJzG5p_3KKV475sPi14UzJAG_8kzRo0BkJex7g=s900-c-k-c0xffffffff-no-rj-mo'} alt=""/>
                </NavLink>
                {
                    props.isFollow
                        ? <button
                            disabled={props.btnDisabled.some(i => i=== props.id) ? true : false}
                            id={props.id}
                            onClick={() => {
                                props.btnFollowClick(props.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "71a0323c-7ff9-4763-8740-70e9a845b5eb",
                                    }
                                }).then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.onClick(props.id)
                                            props.btnFollowClick(props.id)
                                        }
                                    })
                            }}
                            className={classes.UserCard__button}
                        >
                            {"UNFOLLOW"}
                        </button>
                        : <button
                            disabled={props.btnDisabled.some(i => i=== props.id) ? true : false}
                            id={props.id}
                            onClick={() => {
                                props.btnFollowClick(props.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "71a0323c-7ff9-4763-8740-70e9a845b5eb",
                                    }
                                }).then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.onClick(props.id)
                                            props.btnFollowClick(props.id)
                                        }
                                    })
                            }}
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