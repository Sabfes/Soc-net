import {combineReducers} from "redux";
import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
})

export default rootReducer