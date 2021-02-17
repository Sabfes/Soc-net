import {ADD_POST, NEW_POST_TEXT, SAVE_PHOTO_SUCCESS, SET_PROFILE_INFO, SET_PROFILE_STATUS} from "./ActionTypes";
import {userApi} from "../../api/api";

// ACTION CREATORS

export const addPost = (text) => {
    return {
        type: ADD_POST, text
    }
}

export const savePhotoSuccess = photo => {
    return {
        type: SAVE_PHOTO_SUCCESS, photo,
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

export const getProfile = (userId) => async (dispatch) => {
    const res = await userApi.getProfile(userId)

    dispatch(setProfileInfo(res.data))
}

export const getProfileStatus = userId => async (dispatch) => {
    const res = await userApi.getProfileStatus(userId)

    dispatch(setProfileStatus(res.data))
}

export const updateProfileStatus = status => async (dispatch) => {
    const res = await userApi.updateProfileStatus(status)

    if (res.data.resultCode === 0) {
        dispatch(setProfileStatus(status))
    }
}

export const savePhoto = file => async (dispatch) => {
    const res = await userApi.savePhoto(file)

    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos))
    }
}