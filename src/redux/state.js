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
                {name: 'Dima', text: 'test steasd asd;ask asdkjl Asdj '},
                {name: 'Dima', text: 'test steasd asd;ask asdkjl Asdj '},
                {name: 'Dima', text: 'test steasd asd;ask asdkjl Asdj '},
                {name: 'Dima', text: 'test steasd asd;ask asdkjl Asdj '}
            ]
        }
    },
    getState() {
      return this._state
    },
    _CallSubscriber(state) {
        console.log('state render', state)
    },
    addNewPost() {
        if (this._state.profilePage.newPostText === '') {
            console.log('0 value')
        } else {
            this._state.profilePage.posts.push({id: this._state.profilePage.posts.length, text: this._state.profilePage.newPostText})
            this._state.profilePage.newPostText = ''
            this._CallSubscriber(this._state)
        }

    },
    onTextAreaChange(text) {
        this._state.profilePage.newPostText = text
        this._CallSubscriber(this._state)
    },
    subscribe(observer) {
        this._CallSubscriber = observer
    },
}

export default store
window.store = store