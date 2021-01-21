import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import ProfileReducer from "./reducers/ProfileReducer";
import MessagesReducer from "./reducers/MessagesReducer";
import UsersReducer from "./reducers/UsersReducer";
import AuthReducer from "./reducers/AuthReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import AppReducer from "./reducers/AppReducer";

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    app: AppReducer,
    form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store