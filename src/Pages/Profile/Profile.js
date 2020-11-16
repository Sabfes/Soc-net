import React from 'react'
import classes from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {connect} from "react-redux";
import {addPost, getProfile, newPostTextUpdate} from "../../redux/actions/ProfileActionCreators";
import {withRouter} from "react-router-dom";

class Profile extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.id
        if (!userId) {
            userId = '';
        }
        this.props.getProfile(userId)
    }


    onChangeHandler = (text) => {
        this.props.newPostTextUpdate(text)
    }

    render() {
        return (
            <main className={classes.ProfileInfo}>
                <img className={classes.ProfileInfo__background} src="https://coolwallpapers.me/picsup/5595676-black-white-wallpapers.jpg" alt=""/>

                <ProfileInfo avatarImg={this.props.profileInfo.photos.small} desc={this.props.profileInfo.aboutMe}/>
                <MyPosts textAreaValue={this.props.textAreaValue} onClick={this.props.addPost} onChange={this.onChangeHandler} posts={this.props.posts}/>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.profilePage.posts,
        textAreaValue: state.profilePage.newPostText,
        profileInfo: state.profilePage.profileInfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newPostTextUpdate: text => dispatch(newPostTextUpdate(text)),
        addPost: () => dispatch(addPost()),
        getProfile: (id) => dispatch(getProfile(id))
    }
}

const ProfilePage = withRouter(Profile)
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)