import {INITIALIZED_SUCCESS} from "../actions/ActionTypes";

export type initialStateType = {
    initialized: boolean
}

const initialState: initialStateType = {
    initialized: false,
}

const AppReducer = (state = initialState, action: any): initialStateType => {
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