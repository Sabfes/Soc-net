import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./Pages/Profile/Profile";
import Dialogs from "./Pages/Dialogs/Dialogs";
import {Route, Switch, withRouter} from "react-router-dom";
// import {Redirect} from "react-router-dom"
import News from "./Pages/News/News";
import Music from "./Pages/Music/Music";
import Settings from "./Pages/Settings/Settings";
import Users from "./Pages/Users/Users";
import Login from "./Pages/Login/Login";
import React, {Component, ComponentType} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/actions/AppActionCreator";
import Loader from "./components/Loader/Loader";
import {AppStateType} from "./redux/redux-store";
import 'antd/dist/antd.css'
import {Layout} from 'antd';
import {AppHeader} from "./components/Header/Header";
import {Footer} from "antd/es/layout/layout";

const {Content, Sider } = Layout;


type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    initializeApp: () => void
}
type PropsTypes = MapDispatchToPropsType & MapStateToPropsType

class App extends Component<PropsTypes> {
    state = {
        collapsed: false,
    }

    componentDidMount() {
        this.props.initializeApp()
    }

    onCollapse = (collapsed: any) => {
        console.log(collapsed);
        this.setState({collapsed});
    }

    render() {
        const { collapsed } = this.state;
        if (!this.props.initialized) {
            return <Loader/>
        }
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <AppHeader />
                <Layout className="site-layout">
                    <Sider theme="light" collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <Navbar userId={null}/>
                    </Sider>
                    <Content style={{ margin: '0 16px' }} >
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
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
                        <Footer style={{ textAlign: 'center' }}>Social Network ©2020 Created by Bitaev Denis</Footer>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized,
    }
}

export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App);
