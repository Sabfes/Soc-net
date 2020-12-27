import {INITIALIZED_SUCCESS} from "./ActionTypes";
import {authMe} from "./AuthActionCreators";

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe())

    Promise.all([promise]).then( ()=> {
        dispatch(initializedSuccess())
    })
}