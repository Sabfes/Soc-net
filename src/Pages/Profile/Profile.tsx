import React, {ComponentType} from 'react'
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
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileDataType} from "../../types/types";

export type NewPostType = {
    newPostText: string
}
type MapStateToProps = ReturnType<typeof mapStateToProps>
type MapDispatchToProps = {
    newPostTextUpdate: (newPostText: string) => void,
    addPost: (text: any) => void,
    getProfile: (userId: number) => void,
    updateProfileInfo: (info: ProfileDataType) => Promise<any>,
    updateProfileStatus: (status: string) => void,
    getProfileStatus: (userId: number) => void,
    savePhoto: (photo: any) => void,
}
type PathParamsType = {
    id: string,
}


type PropsType = MapStateToProps & MapDispatchToProps & RouteComponentProps<PathParamsType>;

class Profile extends React.Component<PropsType> {
    updateProfile = () => {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        let userId: number | null = +this.props.match.params.id
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push('/login ')
            }
        }

        if (!userId) {
            throw new Error('Id should exist in URL params or in state')
        } else {
            this.props.getProfile(userId as number)
            this.props.getProfileStatus(userId as number)
        }
    }

    componentDidMount() {
        this.updateProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.updateProfile()
        }
    }

    onChangeHandler = (data: any) => {
        this.props.addPost(data.newPostText)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <main className={classes.ProfileInfo}>
                <ProfileInfo
                    updateProfileInfo={this.props.updateProfileInfo}
                    profileInfo={this.props.profileInfo}
                    isOwner={+this.props.match.params.id === this.props.userId}
                    updateProfileStatus={this.props.updateProfileStatus}
                    avatarImg={this.props.photos}
                    desc={this.props.status}
                    savePhoto={this.props.savePhoto}
                />
                <MyPosts
                    onChange={this.onChangeHandler}
                    posts={this.props.posts}
                />
            </main>
        )
    }
}


function mapStateToProps(state: AppStateType) {
    return {
        posts: state.profilePage.posts,
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
        photos: state.profilePage.photos,
    }
}

export default compose<ComponentType>(
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
