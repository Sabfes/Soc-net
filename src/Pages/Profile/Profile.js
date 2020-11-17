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
import {withRouter} from "react-router-dom";
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class Profile extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.id
        if (!userId) {
            userId = '';
        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
    }


    onChangeHandler = (text) => {
        this.props.newPostTextUpdate(text)
    }

    render() {
        return (
            <main className={classes.ProfileInfo}>
                <ProfileInfo
                    updateProfileStatus={this.props.updateProfileStatus}
                    avatarImg={this.props.profileInfo.img}
                    desc={this.props.status}
                />
                <MyPosts
                    textAreaValue={this.props.textAreaValue}
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
        textAreaValue: state.profilePage.newPostText,
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.status,
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         newPostTextUpdate: text => dispatch(newPostTextUpdate(text)),
//         addPost: () => dispatch(addPost()),
//         getProfile: (id) => dispatch(getProfile(id)),
//         updateProfileStatus: (status) => dispatch(updateProfileStatus(status)),
//     }
// }

export default compose(
    // withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
        newPostTextUpdate,
        addPost,
        getProfile,
        updateProfileStatus,
        getProfileStatus,
    })
)(Profile)
