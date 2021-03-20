import React from "react"
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Header} from "antd/es/layout/layout";
import {Button, Col, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logoutUser} from "../../redux/actions/AuthActionCreators";


export const AppHeader: React.FC = () => {
    const isAuth = useSelector( (state: AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(logoutUser())
    }

    return (
        <Header className="site-layout-background" style={{ padding: 0, backgroundColor: '#001529' }}>
            <Row>
                <Col span={22}>
                    <span className={classes.Header__logo}>bitaev.SN</span>
                </Col>

                <Col span={2}>
                    {
                        isAuth
                            ? <Button type="primary" onClick={onClickHandler}>{'logout'}</Button>
                            : <div>
                                <NavLink className={classes.Header__login} to={'/login'}>login</NavLink>
                            </div>
                    }
                </Col>
            </Row>
        </Header>
    )
}

