import {ADD_POST, SAVE_PHOTO_SUCCESS, SET_PROFILE_INFO, SET_PROFILE_STATUS} from "../actions/ActionTypes";

const initialState = {
    posts: [{id: 1, text: 'id1 text'},{id: 2, text: 'id2 text'}],
    profileInfo: {
        contacts: {},
        img: {
            large: '',
            small: '',
        }
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
            const arr = [...state.posts]
            arr.push({id: state.posts.length, text: action.text})
            return {
                ...state, posts: arr,
            }
        case SET_PROFILE_INFO:
            return {
                ...state, profileInfo: {...action.data, img: {...action.data.photos}},
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state, profileInfo: {img: {...action.photo}}
            }
        default:
            return state
    }
}

export default ProfileReducer

