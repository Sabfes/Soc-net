import {
    CHANGE_CURRENT_PAGE, FOLLOW_FETCHING_TOGGLE,
    FOLLOW_TOGGLE,
    IS_FETCH_TOGGLE,
    SET_USERS,
    SET_USERS_TOTAL_COUNT
} from "../actions/ActionTypes";
import {UserType} from "../../types/types";


type InitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetch: boolean,
    followFetchingId: Array<number>,
}
const initialState: InitialStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetch: false,
    followFetchingId: [],
}

const UsersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW_TOGGLE:
            return {
                ...state, users: state.users.map( (item: any) => {
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
        case IS_FETCH_TOGGLE:
            return {
                ...state, isFetch: action.bool,
            }
        case FOLLOW_FETCHING_TOGGLE:
            const prevArray = state.followFetchingId
            let res
            if (prevArray.indexOf( action.id ) === -1) {
                res = [...state.followFetchingId, action.id]
            } else {
                res = [...state.followFetchingId.filter( i => i !== action.id)]
            }
            return {
                ...state, followFetchingId: res,
            }
        default:
            return state
    }
}

export default UsersReducer


