import React, {useEffect} from 'react'
import classes from './ProfileInfo.module.css'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import defaultAvatar from '../../../img/avatar-profile.png'

const ProfileInfo = (props) => {
    useEffect(()=>{
        console.log(props.avatarImg)
    }, [props.avatarImg])

    const onAvatarSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={classes.ProfileInfo}>
            <img className={classes.ProfileInfo__avatarImg} src={props.avatarImg.large || defaultAvatar} alt="avatar-img"/>
            {
                props.isOwner
                    ?   <input type={"file"} onChange={onAvatarSelected}/>
                    :   null
            }
            <ProfileStatus updateProfileStatus={props.updateProfileStatus} desc={props.desc} />
        </div>
    )
}

export default ProfileInfo