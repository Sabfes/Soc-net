import React from 'react'
import {LoginReduxForm} from "./LoginReduxForm/LoginReduxForm";
import {connect} from "react-redux";
import {LoginUser} from "../../redux/actions/AuthActionCreators";
import {Redirect} from "react-router-dom";
import classes from './Login.module.css'

const Login = (props) => {

    const onSubmit  = (formData) => {
        props.LoginUser(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) return <Redirect to={`/profile/${props.userId}`} />

    return (
        <div className={classes.Login}>
            <div className={classes.Login__content}>
                <h1>Login Page</h1>

                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
    }
}
export default connect(mapStateToProps, {
    LoginUser,
})(Login)