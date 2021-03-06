import {ADD_POST, SAVE_PHOTO_SUCCESS, SET_PROFILE_INFO, SET_PROFILE_STATUS} from "../actions/ActionTypes";
import {ProfileActionsTypes} from "../actions/ProfileActionCreators";

type InitialStatePostType = {
    id: number
    text: string
}
type InitialStateType = {
    posts: Array<InitialStatePostType>
    profileInfo: {
        contacts: {}
    }
    photos: {
        small: string
        large: string
    }
    status: string
}

const initialState: InitialStateType = {
    posts: [{id: 1, text: 'id1 text'},{id: 2, text: 'id2 text'}],
    profileInfo: {
        contacts: {},
    },
    photos: {
        large: '',
        small: '',
    },
    status: '',
}

const ProfileReducer = (state = initialState, action: ProfileActionsTypes) => {
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
                ...state, profileInfo: {...action.data}, photos: {...action.data.photos}
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state, photos: {small: action.photo.small, large: action.photo.large}
            }
        default:
            return state
    }
}

export default ProfileReducer

