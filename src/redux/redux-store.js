import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./reducers/ProfileReducer";
import MessagesReducer from "./reducers/MessagesReducer";
import UsersReducer from "./reducers/UsersReducer";
import AuthReducer from "./reducers/AuthReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store