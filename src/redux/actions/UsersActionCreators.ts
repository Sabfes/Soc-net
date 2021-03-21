import {
    CHANGE_CURRENT_PAGE,
    FOLLOW_FETCHING_TOGGLE,
    FOLLOW_TOGGLE,
    IS_FETCH_TOGGLE,
    SET_FILTERS,
    SET_USERS,
    SET_USERS_TOTAL_COUNT
} from "./ActionTypes";
import {ResultCodeEnum} from "../../api/api";
import {usersApi} from "../../api/usersApi";
import {UserType} from "../../types/types";
import {Dispatch} from "redux";
import {FilterType} from "../reducers/UsersReducer";

export type UsersActionTypes = FollowFetchingToggleType | SetUsersType | ChangeCurrentPageType |
    SetTotalUsersCountType | IsFetchToggleType | FollowToggleType | SetFilterType

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

type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): SetUsersType => {
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

type SetTotalUsersCountType = {
    type: typeof SET_USERS_TOTAL_COUNT
    count: number
}
export const setTotalUsersCount = (count: number): SetTotalUsersCountType => {
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

type SetFilterType = {
    type: typeof SET_FILTERS
    filter: FilterType
}

export const setFilter = (filter: FilterType): SetFilterType => {
    return {
        type: SET_FILTERS, filter
    }
}

// THUNK CREATORS
export const requestUsers = (currentPage: number, pageSize: number, filter: FilterType) => {
    return async (dispatch: Dispatch<UsersActionTypes>) => {
        dispatch(isFetchToggle(true))
        dispatch(changeCurrentPage(currentPage))
        dispatch(setFilter(filter))

        await usersApi.getUsers(currentPage, pageSize, filter.term, filter.friend).then(res => {
            dispatch(setUsers(res.data.items))
            dispatch(setTotalUsersCount(res.data.totalCount))
            dispatch(isFetchToggle(false))
        })
    }
}

export const follow = (id: number) => (dispatch: Dispatch<UsersActionTypes>) => {
    dispatch(followFetchingToggle(id))

    usersApi.follow(id).then(res => {
        if (res.resultCode === ResultCodeEnum.SUCCESS) {
            dispatch(followToggle(id))
            dispatch(followFetchingToggle(id))
        }
    })
}

export const unFollow = (id: number) => (dispatch: Dispatch<UsersActionTypes>) => {
    dispatch(followFetchingToggle(id))

    usersApi.unFollow(id).then(res => {
        if (res.resultCode === ResultCodeEnum.SUCCESS) {
            dispatch(followToggle(id))
            dispatch(followFetchingToggle(id))
        }
    })
}
