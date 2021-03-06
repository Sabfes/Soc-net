import  {SET_USER_DATA} from "./ActionTypes";
import {ResultCodeEnum} from "../../api/api";
import {authApi} from "../../api/authApi";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";

export type AuthActionsTypes = SetAuthUserDataActionType

type SetAuthUserDataActionDataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    data: SetAuthUserDataActionDataType
}

export const setAuthUserData = (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
): SetAuthUserDataActionType => {
    return {
        type: SET_USER_DATA, data: {userId, email, login, isAuth}
    }
}

// THUNK CREATORS
export const authMe = () => async (dispatch: Dispatch<AuthActionsTypes>) => {
    let response = await authApi.getAuth()

    if (response.data.resultCode === ResultCodeEnum.SUCCESS) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const LoginUser = (
    email: string,
    login: string,
    rememberMe: boolean
) => async (dispatch: any) => {
    let res = await authApi.login(email, login, rememberMe)
    console.log('res')
    if (res.data.resultCode === ResultCodeEnum.SUCCESS) {
        console.log('norm')
        dispatch(authMe())
    } else {
        console.log('stop')
        const msg = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: msg}))
    }
}

export const logoutUser = () => async (dispatch: Dispatch<AuthActionsTypes>) => {
    const res = await authApi.logout()

    if (res.data.resultCode === ResultCodeEnum.SUCCESS) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}