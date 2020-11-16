import {ADD_POST, NEW_POST_TEXT, SET_PROFILE_INFO} from "../actions/ActionTypes";

const initialState = {
    posts: [{id: 1, text: 'id1 text'},{id: 2, text: 'id2 text'}],
    newPostText: '',
    profileInfo: {
        photos: {
            small: 'https://hostinpl.ru/templates/hos7ru/dleimages/noavatar.png',
        },
        aboutMe: 'description',
    },
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
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
            console.log(action)
            return {
                ...state, profileInfo: action.data,
            }
        default:
            return state
    }
}

export default ProfileReducer

