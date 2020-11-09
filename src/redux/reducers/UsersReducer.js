// import {} from "../actions/ActionTypes";

import {FOLLOW_TOGGLE, SET_USERS, SHOW_MORE_CARD} from "../actions/ActionTypes";

const initialState = {
    users: [
        // {id: 1, name: 'Dmitriy', location: {city: 'Moscow', country: 'Russia'}, status: 'hi i test desk', isFollow: false, },
        // {id: 2, name: 'Leni', location: {city: 'Moscow', country: 'Russia'}, status: 'hi all', isFollow: false, },
        // {id: 3, name: 'Ira', location: {city: 'Moscow', country: 'Russia'}, status: 'wwhaat', isFollow: true, },
        // {id: 4, name: 'Dmitriy', location: {city: 'Moscow', country: 'Russia'}, status: 'hi i test desk', isFollow: false, },
        // {id: 5, name: 'Leni', location: {city: 'Moscow', country: 'Russia'}, status: 'hi all', isFollow: false, },
        // {id: 6, name: 'Ira', location: {city: 'Moscow', country: 'Russia'}, status: 'wwhaat', isFollow: true, },
        // {id: 7, name: 'Dmitriy', location: {city: 'Moscow', country: 'Russia'}, status: 'hi i test desk', isFollow: false, },
        // {id: 8, name: 'Leni', location: {city: 'Moscow', country: 'Russia'}, status: 'hi all', isFollow: false, },
        // {id: 9, name: 'Ira', location: {city: 'Moscow', country: 'Russia'}, status: 'wwhaat', isFollow: true, },
        // {id: 10, name: 'Dmitriy', location: {city: 'Moscow', country: 'Russia'}, status: 'hi i test desk', isFollow: false, },
        // {id: 11, name: 'Leni', location: {city: 'Moscow', country: 'Russia'}, status: 'hi all', isFollow: false, },
        // {id: 12, name: 'Ira', location: {city: 'Moscow', country: 'Russia'}, status: 'wwhaat', isFollow: true, },
        // {id: 13, name: 'Dmitriy', location: {city: 'Moscow', country: 'Russia'}, status: 'hi i test desk', isFollow: false, },
        // {id: 14, name: 'Leni', location: {city: 'Moscow', country: 'Russia'}, status: 'hi all', isFollow: false, },
        // {id: 15, name: 'Ira', location: {city: 'Moscow', country: 'Russia'}, status: 'wwhaat', isFollow: true, },
    ],
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

