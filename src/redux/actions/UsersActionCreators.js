import {CHANGE_CURRENT_PAGE, FOLLOW_TOGGLE, SET_USERS, SET_USERS_TOTAL_COUNT} from "./ActionTypes";

export const followToggle = (id) => {
    return {
        type: FOLLOW_TOGGLE, id,
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS, users,
    }
}

export const changeCurrentPage = (id) => {
    return {
        type: CHANGE_CURRENT_PAGE, id,
    }
}

export const setTotalUsersCount = (count) => {
    return {
        type: SET_USERS_TOTAL_COUNT, count,
    }
}