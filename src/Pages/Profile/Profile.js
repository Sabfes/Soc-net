import React from 'react'
import classes from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {connect} from "react-redux";
import {
    addPost,
    getProfile,
    getProfileStatus,
    newPostTextUpdate,
    updateProfileStatus,
    savePhoto, updateProfileInfo
} from "../../redux/actions/ProfileActionCreators";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";

class Profile extends React.Component {
    updateProfile = () => {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        let userId = this.props.match.params.id
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push('/login ')
            }
        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
    }

    componentDidMount() {
        this.updateProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.updateProfile()
        }
    }

    onChangeHandler = (text) => {
        this.props.addPost(text.newPostText)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <main className={classes.ProfileInfo}>
                <ProfileInfo
                    updateProfileInfo={this.props.updateProfileInfo}
                    profileInfo={this.props.profileInfo}
                    isOwner={+this.props.match.params.id === +this.props.userId}
                    updateProfileStatus={this.props.updateProfileStatus}
                    avatarImg={this.props.profileInfo.img}
                    desc={this.props.status}
                    savePhoto={this.props.savePhoto}
                />
                <MyPosts
                    onClick={this.props.addPost}
                    onChange={this.onChangeHandler}
                    posts={this.props.posts}
                />
            </main>
        )
    }
}


function mapStateToProps(state) {
    return {
        posts: state.profilePage.posts,
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        newPostTextUpdate,
        addPost,
        getProfile,
        updateProfileInfo,
        updateProfileStatus,
        getProfileStatus,
        savePhoto,
    })
)(Profile)
