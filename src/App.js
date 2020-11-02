import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route ,BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
  return (
    <BrowserRouter>
        <div className="App-wrapper">
            <Header />

            <Navbar />
            <Route path={'/profile'} render={()=> <Profile posts={props.posts} />} />
            <Route path={'/dialogs'} render={()=> <Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
            <Route path={'/news'} component={News} />
            <Route path={'/music'} component={Music} />
            <Route path={'/settings'} component={Settings} />
        </div>
    </BrowserRouter>
  );
}

export default App;
