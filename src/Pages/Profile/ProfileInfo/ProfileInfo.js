import React from 'react'
import classes from './ProfileInfo.module.css'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import defaultAvatar from '../../../img/avatar-profile.png'
import Contact from "./Contacts/Contact";

const ProfileInfo = (props) => {
    const onAvatarSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={classes.ProfileInfo}>
            <img className={classes.ProfileInfo__avatarImg} src={props.avatarImg.large || defaultAvatar} alt="avatar-img"/>
            {
                // Показываем кнопку загрузки фотографии, если страница - владельца.
                props.isOwner
                    ?   <input type={"file"} onChange={onAvatarSelected}/>
                    :   null
            }


            {/*Описание профиля*/}
            <div className={classes.ProfileInfo__info}>
                <div>
                    Fullname: {props.profileInfo.fullName}
                </div>
                <ProfileStatus isOwner={props.isOwner} updateProfileStatus={props.updateProfileStatus} desc={props.desc} />
                <div>
                    looking For A Job:{props.profileInfo.lookingForAJob ? 'yes' : 'no'}
                </div>
                {/*Показываем описание поиска работы, если поиск работы === true*/}
                {
                    props.profileInfo.lookingForAJob
                        ?  <div>
                            looking For A Job Description:{props.profileInfo.lookingForAJobDescription}
                        </div>
                        : null
                }
                <div>
                    aboutMe: {props.profileInfo.aboutMe}
                </div>
            </div>

            <div className={classes.ProfileInfo__contacts}>
                Contacts:
                {
                    Object.keys(props.profileInfo.contacts).map( item => {
                        return <Contact key={item} title={item} value={props.profileInfo.contacts[item]}/>
                    })
                }
            </div>
        </div>
    )
}

export default ProfileInfo