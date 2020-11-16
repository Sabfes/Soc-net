import {IS_AUTH_TOGGLE, SET_USER_DATA} from "./ActionTypes";
import {userApi} from "../../api/api";

export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA, data: {userId, email, login}
    }
}

export const isAuthToggle = (isAuth) => {
    return {
        type: IS_AUTH_TOGGLE, isAuth,
    }
}

// THUNK CREATORS

export const authMe = (dispatch) => {
    userApi.getAuth().then(res => {
        if (res.data.resultCode === 0) {
            let {id, login, email} = res.data.data
            dispatch(setAuthUserData(id, email, login))
            dispatch(isAuthToggle(true))
        }
    })
}