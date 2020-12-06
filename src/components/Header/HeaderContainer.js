import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMe, logoutUser, setAuthUserData} from "../../redux/actions/AuthActionCreators";

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAuthUserData: (userId, email, login) => dispatch(setAuthUserData(userId, email, login)),
        authMe: () => dispatch(authMe()),
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)