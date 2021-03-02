import {SET_USER_DATA} from "../actions/ActionTypes";

export type initialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isFetching: boolean,
    isAuth: boolean,
}

const initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

const AuthReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data, isAuth: action.data.isAuth,
            }
        default:
            return state
    }
}

export default AuthReducer

