import {INITIALIZED_SUCCESS} from "../actions/ActionTypes";

const initialState = {
    initialized: false,
}

const AppReducer = (state = initialState, action) => {
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