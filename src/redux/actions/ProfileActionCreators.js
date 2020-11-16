import {ADD_POST, NEW_POST_TEXT, SET_PROFILE_INFO} from "./ActionTypes";
import {userApi} from "../../api/api";

// ACTION CREATORS

export const addPost = () => {
    return {
        type: ADD_POST,
    }
}


export const newPostTextUpdate = (text) => {
    return {
        type: NEW_POST_TEXT, text
    }
}

export const setProfileInfo = (data) => {
    return {
        type: SET_PROFILE_INFO, data
    }
}

// THUNK CREATORS

export const getProfile = (userId) => (dispatch) => {
    console.log('asd')
    userApi.getProfile(userId).then(res => {
        console.log(res)
        dispatch(setProfileInfo(res.data))
    })
}