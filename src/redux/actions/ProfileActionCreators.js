import {ADD_POST, NEW_POST_TEXT, SET_PROFILE_INFO, SET_PROFILE_STATUS} from "./ActionTypes";
import {userApi} from "../../api/api";

// ACTION CREATORS

export const addPost = (text) => {
    return {
        type: ADD_POST, text
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

export const setProfileStatus = status => {
    return {
        type: SET_PROFILE_STATUS, status,
    }
}

// THUNK CREATORS

export const getProfile = (userId) => (dispatch) => {
    userApi.getProfile(userId).then(res => {
        dispatch(setProfileInfo(res.data))
    })
}

export const getProfileStatus = userId => dispatch => {
    userApi.getProfileStatus(userId).then(res => {
        dispatch(setProfileStatus(res.data))
    })
}

export const updateProfileStatus = status => dispatch => {
    userApi.updateProfileStatus(status).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    })
}