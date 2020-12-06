import {SET_USER_DATA} from "../actions/ActionTypes";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

const AuthReducer = (state = initialState, action) => {
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

