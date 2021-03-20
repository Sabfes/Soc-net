import React from 'react'
import classes from './UserCard.module.css'
import {NavLink} from "react-router-dom";
import defaultAvatar from '../../../img/avatar-profile.png'

type PropsTypes = {
    id: number
    imgUrl: string | null
    isFollow: boolean | undefined
    btnDisabledIdArray: Array<number>
    unFollow: (id: number) => void
    follow: (id: number) => void
    name: string
    status: string
}

const UserCard: React.FC<PropsTypes> =
    ({
         id,
         imgUrl,
         isFollow,
         btnDisabledIdArray,
         unFollow,
         name,
         status,
         follow
     }) => {
        return (
            <div className={classes.UserCard}>
                <div className={classes.UserCard__left}>
                    <NavLink to={'/profile/' + id}>
                        <img className={classes.UserCard__avatar}
                             src={imgUrl !== null ? imgUrl : defaultAvatar}
                             alt="avatar"
                        />
                    </NavLink>
                    {
                        isFollow
                            ? <button
                                disabled={btnDisabledIdArray.some(i => i === id) ? true : false}
                                id={id.toString()}
                                onClick={() => unFollow(id)}
                                className={classes.UserCard__button}
                            >
                                {"UNFOLLOW"}
                            </button>
                            : <button
                                disabled={btnDisabledIdArray.some(i => i === id) ? true : false}
                                id={id.toString()}
                                onClick={() => {
                                    follow(id)
                                }}
                                className={classes.UserCard__button}
                            >
                                {"FOLLOW"}
                            </button>
                    }
                </div>

                <div className={classes.UserCard__right}>
                    <span>{name}</span>
                    <span>{status}</span>
                </div>
            </div>
        )
    }

export default UserCard
