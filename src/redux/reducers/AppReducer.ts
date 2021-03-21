import {INITIALIZED_SUCCESS} from "../actions/ActionTypes";
import {AppActionsTypes} from "../actions/AppActionCreator";

const initialState = {
    initialized: false,
}

export type initialStateType = typeof initialState

const AppReducer = (state = initialState, action: AppActionsTypes): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state, initialized: true,
            }
        default:
            return state
    }
}

export default AppReducer
