// import {} from "../actions/ActionTypes";

import {CHANGE_CURRENT_PAGE, FOLLOW_TOGGLE, SET_USERS, SET_USERS_TOTAL_COUNT} from "../actions/ActionTypes";

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 4,
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case CHANGE_CURRENT_PAGE:
            return {
                ...state, currentPage: action.id,
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.count,
            }
        default:
            return state
    }
}

export default UsersReducer

