import {INITIALIZED_SUCCESS} from "../actions/ActionTypes";
import {AppActionsTypes} from "../actions/AppActionCreator";

export type initialStateType = {
    initialized: boolean
}

const initialState: initialStateType = {
    initialized: false,
}

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