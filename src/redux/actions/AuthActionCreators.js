import {SET_USER_DATA} from "./ActionTypes";
import {userApi} from "../../api/api";
import {stopSubmit} from "redux-form";

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA, data: {userId, email, login, isAuth}
    }
}

// THUNK CREATORS

export const authMe = () => async (dispatch) => {
    let response = await userApi.getAuth()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const LoginUser = (email, login, rememberMe) => async (dispatch) => {
    let res = await userApi.login(email, login, rememberMe)

    if (res.data.resultCode === 0) {
        dispatch(authMe())
    } else {
        const msg = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: msg}))
    }
}

export const logoutUser = () => async (dispatch) => {
    const res = await userApi.logout()

    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}