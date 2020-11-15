import React, {Component} from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {isAuthToggle, setAuthUserData} from "../../redux/actions/AuthActionCreators";

class HeaderContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data
                    this.props.setAuthUserData(id, email, login)
                    this.props.isAuthToggle(true)
                }
            })
            .catch(e => {
                console.log(e)
            })
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)