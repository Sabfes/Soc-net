import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import {BrowserRouter} from "react-router-dom";


const rerender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    onTextAreaChange={store.onTextAreaChange.bind(store)}
                    addNewPost={store.addNewPost.bind(store)}

                    posts={state.profilePage.posts}
                    dialogs={state.profilePage.dialogs}
                    textAreaValue={state.profilePage.newPostText}

                    messages={state.messagesPage.messages}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerender(store.getState())

store.subscribe(rerender)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
