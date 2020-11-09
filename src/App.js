import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./Pages/Profile/Profile";
import Dialogs from "./Pages/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./Pages/News/News";
import Music from "./Pages/Music/Music";
import Settings from "./Pages/Settings/Settings";
import Users from "./Pages/Users/Users";

function App() {
  return (
    <div className="App-wrapper">
        <Header />
        <Navbar />
        <Route path={'/profile'} render={()=> <Profile/>} />
        <Route path={'/dialogs'} render={()=> <Dialogs/>} />
        <Route path={'/users'} render={()=> <Users />} />
        <Route path={'/news'} component={News} />
        <Route path={'/music'} component={Music} />
        <Route path={'/settings'} component={Settings} />
    </div>
  );
}

export default App;
