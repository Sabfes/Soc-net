import {
    CHANGE_CURRENT_PAGE,
    FOLLOW_FETCHING_TOGGLE,
    FOLLOW_TOGGLE,
    IS_FETCH_TOGGLE,
    SET_USERS,
    SET_USERS_TOTAL_COUNT
} from "./ActionTypes";
import {userApi} from "../../api/api";


// ACTION CREATORS

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

export const isFetchToggle = (bool) => {
    return {
        type: IS_FETCH_TOGGLE, bool,
    }
}

export const followFetchingToggle = (id) => {
    return {
        type: FOLLOW_FETCHING_TOGGLE, id
    }
}

// THUNK CREATORS
export const requestUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(isFetchToggle(true))

    userApi.getUsers(currentPage, pageSize).then(res => {
        dispatch(setUsers(res.data.items))
        dispatch(setTotalUsersCount(res.data.totalCount))
        dispatch(isFetchToggle(false))
    })
}

export const follow = (id) => (dispatch) => {
    dispatch(followFetchingToggle(id))

    userApi.follow(id).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(followToggle(id))
            dispatch(followFetchingToggle(id))
        }
    })
}

export const unFollow = (id) => (dispatch) => {
    dispatch(followFetchingToggle(id))

    userApi.unFollow(id).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(followToggle(id))
            dispatch(followFetchingToggle(id))
        }
    })
}
