import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={classes.ProfileInfo}>
            <img className={classes.ProfileInfo__avatarImg} src={props.avatarImg} alt=""/>
            <span className={classes.ProfileInfo__description} >{props.desc}</span>
        </div>
    )
}

export default ProfileInfo