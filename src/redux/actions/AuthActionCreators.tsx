import  {SET_USER_DATA} from "./ActionTypes";
import {userApi} from "../../api/api";
import {stopSubmit} from "redux-form";

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

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => {
    return {
        type: SET_USER_DATA, data: {userId, email, login, isAuth}
    }
}

// THUNK CREATORS

export const authMe = () => async (dispatch: any) => {
    let response = await userApi.getAuth()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const LoginUser = (email: string, login: string, rememberMe: boolean) => async (dispatch: any) => {
    let res = await userApi.login(email, login, rememberMe)

    if (res.data.resultCode === 0) {
        dispatch(authMe())
    } else {
        const msg = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: msg}))
    }
}

export const logoutUser = () => async (dispatch: any) => {
    const res = await userApi.logout()

    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}