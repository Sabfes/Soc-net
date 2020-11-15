import React from 'react'
import classes from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {connect} from "react-redux";
import {addPost, newPostTextUpdate} from "../../redux/actions/ProfileActionCreators";
import axios from "axios";
import {withRouter} from "react-router-dom";

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profileInfo: {
                photos: {
                    small: 'https://hostinpl.ru/templates/hos7ru/dleimages/noavatar.png',
                },
                aboutMe: 'description',
            },
        }
    }

    componentDidMount() {
        let userId = this.props.match.params.id
        if (!userId) {
            userId = '';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                this.setState({profileInfo: {...res.data}})
            })
            .catch(e => {
                console.log(e)
            })
    }

    onChangeHandler = (text) => {
        this.props.newPostTextUpdate(text)
    }

    render() {
        return (
            <main className={classes.ProfileInfo}>
                <img className={classes.ProfileInfo__background} src="https://coolwallpapers.me/picsup/5595676-black-white-wallpapers.jpg" alt=""/>

                <ProfileInfo avatarImg={this.state.profileInfo.photos.small} desc={this.state.profileInfo.aboutMe}/>
                <MyPosts textAreaValue={this.props.textAreaValue} onClick={this.props.addPost} onChange={this.onChangeHandler} posts={this.props.posts}/>
            </main>
        )
    }
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

const ProfilePage = withRouter(Profile)
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)