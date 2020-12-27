import {SET_USER_DATA} from "./ActionTypes";
import {userApi} from "../../api/api";
import {stopSubmit} from "redux-form";

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA, data: {userId, email, login, isAuth}
    }
}

// THUNK CREATORS

export const authMe = () => (dispatch) => {
    userApi.getAuth()
        .then(res => {
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
        .catch(err => {
            console.log(err)
        })
}

export const LoginUser = (email, login, rememberMe) => (dispatch) => {
    userApi.login(email, login, rememberMe)
        .then( res => {
            if (res.data.resultCode === 0) {
                dispatch(authMe())
            } else {
                const msg = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: msg}))
            }
        })
        .catch(err => {
            console.log(err)
        })
}

export const logoutUser = () => (dispatch) => {
    userApi.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
        .catch(err => {
            console.log(err)
        })
}