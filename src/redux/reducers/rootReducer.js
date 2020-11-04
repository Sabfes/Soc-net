import {combineReducers} from "redux";
import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
})

export default rootReducer