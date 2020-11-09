import {combineReducers} from "redux";
import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";
import UsersReducer from "./UsersReducer";

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    usersPage: UsersReducer,
})

export default rootReducer