import {IS_AUTH_TOGGLE, SET_USER_DATA} from "./ActionTypes";

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