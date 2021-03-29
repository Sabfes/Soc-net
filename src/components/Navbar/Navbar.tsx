import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Menu} from "antd";
import {DesktopOutlined, UserOutlined, MessageOutlined, TeamOutlined ,SettingOutlined,SoundOutlined , } from "@ant-design/icons";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

const Navbar: React.FC<MapStateToPropsType> = ({userId}) => {
    return (
        <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />}>
                <NavLink
                    className={classes.Navbar__link}
                    to={'/profile/' + userId}
                    activeClassName={classes.Navbar__linkActive}
                >
                    Profile
                </NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<MessageOutlined />}>
                <NavLink
                    className={classes.Navbar__link}
                    to={'/dialogs'}
                    activeClassName={classes.Navbar__linkActive}
                >
                    Messages
                </NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<TeamOutlined />}>
                <NavLink
                    className={classes.Navbar__link}
                    to={'/users'}
                    activeClassName={classes.Navbar__linkActive}
                >
                    Users
                </NavLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<DesktopOutlined />}>
                <NavLink
                    className={classes.Navbar__link}
                    to={'/news'}
                    activeClassName={classes.Navbar__linkActive}
                >
                    News
                </NavLink>
            </Menu.Item>
            <Menu.Item key="5" icon={<SoundOutlined  />}>
                <NavLink
                    className={classes.Navbar__link}
                    to={'/music'}
                    activeClassName={classes.Navbar__linkActive}
                >
                    Music
                </NavLink>
            </Menu.Item>
            <Menu.Item key="6" icon={<SettingOutlined  />}>
                <NavLink
                    className={classes.Navbar__link}
                    to={'/settings'}
                    activeClassName={classes.Navbar__linkActive}
                >
                    Settings
                </NavLink>
            </Menu.Item>
            <Menu.Item key="7" icon={<SettingOutlined  />}>
                <NavLink
                    className={classes.Navbar__link}
                    to={'/chat'}
                    activeClassName={classes.Navbar__linkActive}
                >
                    chat
                </NavLink>
            </Menu.Item>
        </Menu>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        userId: state.auth.userId,
    }
}

export default connect(mapStateToProps, null)(Navbar)
