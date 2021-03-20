import React, {ChangeEvent, useState} from 'react'
import classes from './ProfileInfo.module.css'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus"
import defaultAvatar from '../../../img/avatar-profile.png'
import {ProfileDataFormRedux} from "./ProfileDataFormRedux/ProfileDataFormRedux"
import ProfileData from "./ProfileData/ProfileData"
import Button from "../../../components/Button/Button"
import {ProfileDataType} from "../../../types/types"

type PropsType = {
    savePhoto: (photo: any) => void,
    updateProfileInfo: (profileInfo: ProfileDataType) => Promise<any>,
    updateProfileStatus: (status: string) => void,

    profileInfo: any,
    avatarImg: {
        large: string,
        small: string,
    },
    isOwner: boolean,
    desc: string,
}

const ProfileInfo: React.FC<PropsType> = (props) => {
    const [editMode, setEditMode] = useState(false)

    const onAvatarSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: any) => {
        props.updateProfileInfo(formData).then(() => {
            setEditMode(false)
        })
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
                    ? <input type={"file"} onChange={onAvatarSelected}/>
                    : null
            }
            <ProfileStatus
                isOwner={props.isOwner}
                updateProfileStatus={props.updateProfileStatus}
                desc={props.desc}
            />

            {/*Показываем кнопку настройки, если страница - владельца.*/}
            {
                props.isOwner && !editMode
                    ? <Button onClick={() => {
                        setEditMode(true)
                    }}
                              value={'edit'}
                    />
                    : null
            }
            {/*Показываем форму настройки если включен editMode*/}
            {
                editMode
                    ? <ProfileDataFormRedux
                        profileInfo={props.profileInfo}
                        initialValues={props.profileInfo}
                        onSubmit={onSubmit}
                    />
                    : <ProfileData
                        profileInfo={props.profileInfo}
                    />
            }
        </div>
    )
}
export default ProfileInfo
