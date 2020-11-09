import {FOLLOW_TOGGLE, SET_USERS, SHOW_MORE_CARD} from "./ActionTypes";

export const showMoreCard = () => {
    return {
        type: SHOW_MORE_CARD,
    }
}

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