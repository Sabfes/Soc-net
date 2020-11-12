// import {} from "../actions/ActionTypes";

import {FOLLOW_TOGGLE, SET_USERS, SHOW_MORE_CARD} from "../actions/ActionTypes";

const initialState = {
    users: [],
    showUsers: 4,
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MORE_CARD:
            return {
                ...state, showUsers: state.showUsers + 2,
            }
        case FOLLOW_TOGGLE:
            return {
                ...state, users: state.users.map( (item) => {
                    if (+item.id === +action.id) {
                        return {...item, followed: !item.followed}
                    }
                    return item
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        default:
            return state
    }
}

export default UsersReducer

