import {ADD_POST, NEW_POST_TEXT} from "./ActionTypes";

const ProfileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText === '') {
                console.log('0 value')
            } else {
                state.posts.push({id: state.posts.length, text: state.newPostText})
                state.newPostText = ''
            }
            return state
        case NEW_POST_TEXT:
            console.log(state, action.text)
            state.newPostText = action.text
            return state
        default:
            return state
    }
}

export default ProfileReducer

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}


export const newPostTextUpdate = (text) => {
    return {
        type: NEW_POST_TEXT, text
    }
}