import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={classes.ProfileInfo}>
            <img width={'60'} height={'60'} src="https://hostinpl.ru/templates/hos7ru/dleimages/noavatar.png" alt=""/>
            <span>desc</span>
        </div>
    )
}

export default ProfileInfo