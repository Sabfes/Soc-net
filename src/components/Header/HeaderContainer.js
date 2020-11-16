import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMe, isAuthToggle, setAuthUserData} from "../../redux/actions/AuthActionCreators";

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
        isAuthToggle: isAuth => dispatch(isAuthToggle(isAuth)),
        authMe: () => dispatch(authMe),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)