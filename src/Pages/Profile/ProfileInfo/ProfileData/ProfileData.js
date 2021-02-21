import React from "react";
import classes from "../ProfileInfo.module.css";
import Contact from "../Contacts/Contact";

const ProfileData = ({profileInfo}) => {
    return (
        <div className={classes.ProfileData}>
            {/*Описание профиля*/}
            <div className={classes.ProfileData__info}>
                <div>
                    Fullname: {profileInfo.fullName}
                </div>
                <div>
                    looking For A Job:{profileInfo.lookingForAJob ? 'yes' : 'no'}
                </div>
                {/*Показываем описание поиска работы, если поиск работы === true*/}
                {
                    profileInfo.lookingForAJob
                        ?  <div>
                            looking For A Job Description:{profileInfo.lookingForAJobDescription}
                        </div>
                        : null
                }
                <div>
                    aboutMe: {profileInfo.aboutMe}
                </div>
            </div>

            {/*<div className={classes.ProfileData__contacts}>*/}
            {/*    Contacts:*/}
            {/*    {*/}
            {/*        Object.keys(profileInfo.contacts).map( item => {*/}
            {/*            return <Contact key={item} title={item} value={profileInfo.contacts[item]}/>*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    )
}

export default ProfileData