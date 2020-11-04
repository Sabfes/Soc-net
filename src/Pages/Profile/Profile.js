import React from 'react'
import classes from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <main className={classes.ProfileInfo}>
            <img className={classes.ProfileInfo__background} src="https://coolwallpapers.me/picsup/5595676-black-white-wallpapers.jpg" alt=""/>


            <ProfileInfo />
            <MyPosts textAreaValue={props.textAreaValue} onTextAreaChange={props.onTextAreaChange} addNewPost={props.addNewPost} posts={props.posts}/>
        </main>
    )
}

export default Profile