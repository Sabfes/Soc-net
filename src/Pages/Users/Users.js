import React, {Component} from 'react';
import classes from './Users.module.css'
import {connect} from "react-redux";
import UserCard from "./User/UserCard";
import {showMoreCard, followToggle, setUsers} from "../../redux/actions/UsersActionCreators";
import axios from 'axios'

class Users extends Component {
    state = {
        getUsers: false,
    }

    getUsers = () => {
        if (this.props.users.length === 0)  {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => {
                    console.log(res.data.items[0])
                    this.props.setUsers(res.data.items)
                })
                .catch(e => {
                    console.log(e)
                })
            this.setState({getUsers: !this.state.getUsers})
        }
    }

    render() {
        return (
            <div className={classes.Users}>
                <h1>users</h1>

                <div className={classes.Users__container}>
                    {
                        this.state.getUsers === false ? <button onClick={this.getUsers}>get users</button> : null
                    }
                    {
                        this.props.users.map( (u,i)=>{
                            if (i<this.props.showUsers) {
                                return (<UserCard
                                    key={i}
                                    id={u.id}
                                    name={u.name}
                                    status={u.status}
                                    isFollow={u.followed}
                                    imgUrl={u.photos.small}
                                    onClick={this.props.followToggle}
                                />)
                            } else {
                                return null
                            }

                        })
                    }
                </div>

                <button className={classes.Users__button} onClick={this.props.showMoreCard}>Show more</button>
            </div>
        )
    }
}




function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        showUsers: state.usersPage.showUsers,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showMoreCard: () => dispatch(showMoreCard()),
        followToggle: (e) => dispatch(followToggle(e.target.id)),
        setUsers: (users) => dispatch(setUsers(users)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)




