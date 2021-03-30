import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import ProfileReducer from "./reducers/ProfileReducer";
import MessagesReducer from "./reducers/MessagesReducer";
import UsersReducer from "./reducers/UsersReducer";
import AuthReducer from "./reducers/AuthReducer";
import thunk from "redux-thunk";
import AppReducer from "./reducers/AppReducer";
import {reducer as formReducer} from "redux-form";
import ChatReducer from "./reducers/ChatReducer";


const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    app: AppReducer,
    form: formReducer,
    chat: ChatReducer,
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store
