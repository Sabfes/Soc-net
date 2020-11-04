import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./Pages/Profile/Profile";
import Dialogs from "./Pages/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./Pages/News/News";
import Music from "./Pages/Music/Music";
import Settings from "./Pages/Settings/Settings";

function App(props) {
  return (
    <div className="App-wrapper">
        <Header />

        <Navbar />
        <Route path={'/profile'} render={()=> <Profile
            textAreaValue={props.state.profilePage.newPostText}
            dispatch={props.dispatch}
            posts={props.state.profilePage.posts} />}
        />
        <Route path={'/dialogs'} render={()=> <Dialogs
            textAreaValue={props.state.messagesPage.newMessageText}
            dialogs={props.state.profilePage.dialogs}
            messages={props.state.messagesPage.messages}
            dispatch={props.dispatch} />}
        />
        <Route path={'/news'} component={News} />
        <Route path={'/music'} component={Music} />
        <Route path={'/settings'} component={Settings} />
    </div>
  );
}

export default App;
