import {ADD_POST, NEW_POST_TEXT, SET_PROFILE_INFO, SET_PROFILE_STATUS} from "../actions/ActionTypes";

const initialState = {
    posts: [{id: 1, text: 'id1 text'},{id: 2, text: 'id2 text'}],
    newPostText: '',
    profileInfo: {
        img: ''
    },
    status: '',
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_STATUS:
            return {
                ...state, status: action.status,
            }
        case ADD_POST:
            if (state.newPostText === '') {
                console.log('0 value')
            } else {
                state.posts.push({id: state.posts.length, text: state.newPostText})
            }
            return {
                ...state, newPostText: '',
            }
        case NEW_POST_TEXT:
            return {
                ...state, newPostText: action.text
            }
        case SET_PROFILE_INFO:
            return {
                ...state, profileInfo: {...action.data, img: action.data.photos.small},
            }
        default:
            return state
    }
}

export default ProfileReducer

