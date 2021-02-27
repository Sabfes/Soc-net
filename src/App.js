import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./Pages/Profile/Profile";
import Dialogs from "./Pages/Dialogs/Dialogs";
import {Switch, withRouter, Route} from "react-router-dom";
// import {Redirect} from "react-router-dom"
import News from "./Pages/News/News";
import Music from "./Pages/Music/Music";
import Settings from "./Pages/Settings/Settings";
import Users from "./Pages/Users/Users";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Pages/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/actions/AppActionCreator";
import Loader from "./components/Loader/Loader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }

        return (
            <div className="App-wrapper">
                <HeaderContainer/>
                <Navbar/>

                <Switch>
                    <Route path={'/profile/:id?'} exact={true} render={() => <Profile/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                    <Route path={'/users'} render={() => <Users/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/login'} component={Login}/>
                    <Route path={'/'} render={() => <div> Home Page :3</div>}/>
                    {/*Редирект на профиль.*/}
                    {/*<Route path={'/'} render={ ()=> <Redirect to={'/profile'} /> }/>*/}
                    <Route path={'*'} exact render={() => <div>404 not found</div>}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        initialized: state.app.initialized,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App);
