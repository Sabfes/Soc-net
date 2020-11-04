import {ADD_POST, NEW_POST_TEXT} from "./ActionTypes";

export const addPost = () => {
    return {
        type: ADD_POST,
    }
}


export const newPostTextUpdate = (text) => {
    return {
        type: NEW_POST_TEXT, text
    }
}