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
    updateProfileStatus
} from "../../redux/actions/ProfileActionCreators";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";

class Profile extends React.Component {

    componentDidMount() {
        if (!this.props.isAuth) return <Redirect to={'/login'} />

        let userId = this.props.match.params.id
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
    }


    onChangeHandler = (text) => {
        this.props.addPost(text.newPostText)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'} />
        return (
            <main className={classes.ProfileInfo}>
                <ProfileInfo
                    updateProfileStatus={this.props.updateProfileStatus}
                    avatarImg={this.props.profileInfo.img}
                    desc={this.props.status}
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
        updateProfileStatus,
        getProfileStatus,
    })
)(Profile)
