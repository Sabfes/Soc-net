import React, {useState} from 'react'
import classes from './ProfileInfo.module.css'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus"
import defaultAvatar from '../../../img/avatar-profile.png'
import {ProfileDataFormRedux} from "./ProfileDataFormRedux/ProfileDataFormRedux"
import ProfileData from "./ProfileData/ProfileData"

const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false)

    const onAvatarSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmitHandler = (formData) => {
        props.updateProfileInfo(formData)
        console.log(formData)
    }

    return (
        <div className={classes.ProfileInfo}>
            {/*Аватар профиля*/}
            <img
                className={classes.ProfileInfo__avatarImg}
                src={props.avatarImg.large || defaultAvatar}
                alt="avatar-img"
            />
            {/*Показываем кнопку загрузки фотографии, если страница - владельца.*/}
            {
                props.isOwner
                    ?   <input type={"file"} onChange={onAvatarSelected}/>
                    :   null
            }
            <ProfileStatus isOwner={props.isOwner} updateProfileStatus={props.updateProfileStatus} desc={props.desc} />

            {/*Показываем кнопку настройки, если страница - владельца.*/}
            {
                props.isOwner && !editMode
                    ? <button onClick={()=> setEditMode(true)}>edit</button>
                    : null
            }
            {/*Показываем форму настройки если включен editMode*/}
            {
                editMode
                    ? <ProfileDataFormRedux
                        offEditMode={setEditMode}
                        onSubmit={onSubmitHandler}
                    />
                    : <ProfileData
                        profileInfo={props.profileInfo}
                    />
            }
        </div>
    )
}

export default ProfileInfo