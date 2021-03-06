import {ADD_POST, NEW_POST_TEXT, SAVE_PHOTO_SUCCESS, SET_PROFILE_INFO, SET_PROFILE_STATUS} from "./ActionTypes";
import {ResultCodeEnum} from "../../api/api";
import {profileApi} from "../../api/profileApi";
import {stopSubmit} from "redux-form";
import {AppStateType} from "../redux-store";
import {Dispatch} from "redux";
import {ProfileData} from "../../types/types";

export type ProfileActionsTypes = AddPostType | SavePhotoSuccessType | NewPostTextUpdateType |
    SetProfileStatusType | NewPostTextUpdateType | SetProfileStatusType | SetProfileInfoType

// ACTION CREATORS
type AddPostType = {
    type: typeof ADD_POST
    text: string
}

export const addPost = (text: string): AddPostType => {
    return {
        type: ADD_POST, text
    }
}

type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photo: string
}

export const savePhotoSuccess = (photo: string): SavePhotoSuccessType => {
    return {
        type: SAVE_PHOTO_SUCCESS, photo,
    }
}

type NewPostTextUpdateType = {
    type: typeof NEW_POST_TEXT
    text: string
}

export const newPostTextUpdate = (text:string): NewPostTextUpdateType => {
    return {
        type: NEW_POST_TEXT, text
    }
}

type SetProfileInfoType = {
    type: typeof SET_PROFILE_INFO
    data: ProfileData
}

export const setProfileInfo = (data: ProfileData): SetProfileInfoType => {
    return {
        type: SET_PROFILE_INFO, data
    }
}

type SetProfileStatusType = {
    type: typeof SET_PROFILE_STATUS
    status: string
}

export const setProfileStatus = (status: string): SetProfileStatusType => {
    return {
        type: SET_PROFILE_STATUS, status,
    }
}

// THUNK CREATORS
export const updateProfileInfo = (data: any) => async (dispatch: any, getState: ()=> AppStateType) => {
    const userId = getState().auth.userId
    const res = await profileApi.updateProfileInfo(data)

    if (res.data.resultCode === ResultCodeEnum.SUCCESS) {
        if (userId !== null) {
            dispatch(getProfile(userId))
        } else {
            console.log('userId = null')
        }
    } else {
        dispatch(stopSubmit('profileData', {_error: res.data.messages[0]}))
        return Promise.reject(res.data.messages[0])
    }

}

export const getProfile = (userId:number) => async (dispatch: any) => {
    const res = await profileApi.getProfile(userId)

    dispatch(setProfileInfo(res.data))
}

export const getProfileStatus = (userId:number) => async (dispatch: Dispatch<ProfileActionsTypes>) => {
    const res = await profileApi.getProfileStatus(userId)

    dispatch(setProfileStatus(res.data))
}

export const updateProfileStatus = (status:string) => async (dispatch: Dispatch<ProfileActionsTypes>) => {
    const res = await profileApi.updateProfileStatus(status)

    if (res.data.resultCode === ResultCodeEnum.SUCCESS) {
        dispatch(setProfileStatus(status))
    }
}

export const savePhoto = (file: string) => async (dispatch: Dispatch<ProfileActionsTypes>) => {
    const res = await profileApi.savePhoto(file)

    if (res.data.resultCode === ResultCodeEnum.SUCCESS) {
        console.log('res data success')
        dispatch(savePhotoSuccess(res.data.data.photos))
    }
}