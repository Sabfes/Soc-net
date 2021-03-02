import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutUser, setAuthUserData} from "../../redux/actions/AuthActionCreators";

class HeaderContainer extends Component {
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

export default connect(mapStateToProps, {setAuthUserData, logoutUser})(HeaderContainer)