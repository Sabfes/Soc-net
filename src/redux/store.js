import ProfileReducer from "./reducers/ProfileReducer";
import MessagesReducer from "./reducers/MessagesReducer";

let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, text: 'id1 text'},{id: 2, text: 'id2 text'}],
            dialogs: [{name: 'Dima', id: 1}, {name: 'Lena', id: 2}, {name: 'Dimasol', id: 3}],
            newPostText: '',
        },
        messagesPage: {
            messages: [
                {name: 'Dima', text: 'test steasd asd;ask asdkjl Asdj '},
                {name: 'Dima', text: 'test steasd asd;ask asdkjl Asdj '},
            ],
            newMessageText: '',
        }
    },
    _CallSubscriber() {    },

    getState() {
      return this._state
    },
    subscribe(observer) {
        this._CallSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.messagesPage = MessagesReducer(this._state.messagesPage, action)
        this._CallSubscriber(this._state)
    },
}

export default store
