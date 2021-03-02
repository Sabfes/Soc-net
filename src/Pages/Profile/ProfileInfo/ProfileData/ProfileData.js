import React from "react";
import classes from "./ProfileData.module.css";
import Contact from "../Contacts/Contact";

const ProfileData = ({profileInfo}) => {
    return (
        <div className={classes.ProfileData}>
            {/*Описание профиля*/}
            <div className={classes.ProfileData__info}>
                <div>
                    Fullname:
                    <span className={classes.ProfileData__inputInfo}>
                        {profileInfo.fullName}
                    </span>
                </div>
                <div>
                    looking For A Job:
                    <span className={classes.ProfileData__inputInfo}>
                        {profileInfo.lookingForAJob ? 'yes' : 'no'}
                    </span>
                </div>
                {/*Показываем описание поиска работы, если поиск работы === true*/}
                {
                    profileInfo.lookingForAJob
                        ? <div>
                            looking For A Job Description:
                            <span className={classes.ProfileData__inputInfo}>
                                {profileInfo.lookingForAJobDescription}
                            </span>
                        </div>
                        : null
                }
                <div>
                    aboutMe: <span className={classes.ProfileData__inputInfo}>{profileInfo.aboutMe}</span>
                </div>
            </div>

            <div className={classes.ProfileData__contacts}>
                Contacts:
                {
                    Object.keys(profileInfo.contacts).map(item => {
                        return <Contact key={item} title={item} value={profileInfo.contacts[item]}/>
                    })
                }
            </div>
        </div>
    )
}

export default ProfileData