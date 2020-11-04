import React from 'react'
import classes from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {connect} from "react-redux";
import {addPost, newPostTextUpdate} from "../../redux/actions/ProfileActionCreators";

const Profile = (props) => {

    const onChangeHandler = (text) => {
        props.newPostTextUpdate(text)
    }
    return (
        <main className={classes.ProfileInfo}>
            <img className={classes.ProfileInfo__background} src="https://coolwallpapers.me/picsup/5595676-black-white-wallpapers.jpg" alt=""/>

            <ProfileInfo />
            <MyPosts textAreaValue={props.textAreaValue} onClick={props.addPost} onChange={onChangeHandler} posts={props.posts}/>
        </main>
    )
}

function mapStateToProps(state) {
    return {
        posts: state.profilePage.posts,
        textAreaValue: state.profilePage.newPostText,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newPostTextUpdate: text => dispatch(newPostTextUpdate(text)),
        addPost: () => dispatch(addPost()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)