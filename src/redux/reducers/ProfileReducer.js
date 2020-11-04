import {ADD_POST, NEW_POST_TEXT} from "../actions/ActionTypes";

const initialState = {
    posts: [{id: 1, text: 'id1 text'},{id: 2, text: 'id2 text'}],
    newPostText: '',
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
        default:
            return state
    }
}

export default ProfileReducer

