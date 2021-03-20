import React, {FC} from 'react'
import {LoginReduxForm} from "./LoginReduxForm";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import classes from './Login.module.css'
import {AppStateType} from "../../redux/redux-store";
import {LoginUser} from "../../redux/actions/AuthActionCreators";

type MapStatePropsType = {
    isAuth: boolean
    userId: number | null
}
type MapDispatchPropsType = {
    LoginUser: (email: string, login: string, rememberMe: boolean) => void
}

type PropsType = MapDispatchPropsType & MapStatePropsType

const Login: FC<PropsType> = ({LoginUser, isAuth, userId}) => {

    const onSubmit = (formData: any) => {
        LoginUser(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) return <Redirect to={`/profile/${userId}`} />

    return (
        <div className={classes.Login}>
            <div className={classes.Login__content}>
                <h1>Login Page</h1>

                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

function mapStateToProps(state: AppStateType): MapStatePropsType {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
    }
}
export default connect(mapStateToProps, {
    LoginUser,
})(Login)
