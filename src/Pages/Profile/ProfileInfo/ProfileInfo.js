import React from 'react'
import classes from './ProfileInfo.module.css'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    return (
        <div className={classes.ProfileInfo}>
            <img className={classes.ProfileInfo__avatarImg} src={props.avatarImg} alt=""/>
            <ProfileStatus updateProfileStatus={props.updateProfileStatus} desc={props.desc} />
        </div>
    )
}

export default ProfileInfo