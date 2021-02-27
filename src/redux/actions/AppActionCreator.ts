import {INITIALIZED_SUCCESS} from "./ActionTypes";
import {authMe} from "./AuthActionCreators";

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): initializedSuccessActionType => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}

export const initializeApp = () => async (dispatch: any) => {
    let promise = dispatch(authMe())

    Promise.all([promise]).then( ()=> {
        dispatch(initializedSuccess())
    })
}