import {
    CHANGE_CURRENT_PAGE,
    FOLLOW_FETCHING_TOGGLE,
    FOLLOW_TOGGLE,
    IS_FETCH_TOGGLE,
    SET_USERS,
    SET_USERS_TOTAL_COUNT
} from "./ActionTypes";
import {userApi} from "../../api/api";
import {UserType} from "../../types/types";


// ACTION CREATORS
type FollowToggleType = {
    type: typeof FOLLOW_TOGGLE
    id: number
}
export const followToggle = (id: number): FollowToggleType => {
    return {
        type: FOLLOW_TOGGLE, id,
    }
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS, users,
    }
}

type ChangeCurrentPageType = {
    type: typeof CHANGE_CURRENT_PAGE
    id: number
}
export const changeCurrentPage = (id: number): ChangeCurrentPageType => {
    return {
        type: CHANGE_CURRENT_PAGE, id,
    }
}

type SetTotalUsersCount = {
    type: typeof SET_USERS_TOTAL_COUNT
    count: number
}
export const setTotalUsersCount = (count: number): SetTotalUsersCount => {
    return {
        type: SET_USERS_TOTAL_COUNT, count,
    }
}

type IsFetchToggleType = {
    type: typeof IS_FETCH_TOGGLE
    bool: boolean
}
export const isFetchToggle = (bool: boolean): IsFetchToggleType => {
    return {
        type: IS_FETCH_TOGGLE, bool,
    }
}

type FollowFetchingToggleType = {
    type: typeof FOLLOW_FETCHING_TOGGLE
    id: number
}
export const followFetchingToggle = (id: number): FollowFetchingToggleType => {
    return {
        type: FOLLOW_FETCHING_TOGGLE, id
    }
}

// THUNK CREATORS
export const requestUsers = (currentPage: number, pageSize: number) => (dispatch: any) => {
    dispatch(isFetchToggle(true))

    userApi.getUsers(currentPage, pageSize).then(res => {
        dispatch(setUsers(res.data.items))
        dispatch(setTotalUsersCount(res.data.totalCount))
        dispatch(isFetchToggle(false))
    })
}

export const follow = (id: number) => (dispatch: any) => {
    dispatch(followFetchingToggle(id))

    userApi.follow(id).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(followToggle(id))
            dispatch(followFetchingToggle(id))
        }
    })
}

export const unFollow = (id: number) => (dispatch: any) => {
    dispatch(followFetchingToggle(id))

    userApi.unFollow(id).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(followToggle(id))
            dispatch(followFetchingToggle(id))
        }
    })
}
