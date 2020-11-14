import React, {Component} from 'react';
import classes from './Users.module.css'
import {connect} from "react-redux";
import UserCard from "./User/UserCard";
import {changeCurrentPage, followToggle, setTotalUsersCount, setUsers} from "../../redux/actions/UsersActionCreators";
import axios from 'axios'

class Users extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
            .catch(e => {
                console.log(e)
            })
    }
    changePage = (e) => {
        this.props.changeCurrentPage(+e.target.id)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${+e.target.id}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
            .catch(e => {
                console.log(e)
            })
    }
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = []
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={classes.Users}>
                <h1>users</h1>

                <div className={classes.Users__pagination}>
                    {pages.map( (i, k)=> {
                        return <span key={k} id={i} onClick={this.changePage} className={this.props.currentPage === i ? classes.selectedPage : classes.Users__paginationItem} >{i}</span>
                    })}
                </div>

                <div className={classes.Users__container}>
                    {
                        this.props.users.map( (u,i)=>{
                                return (<UserCard
                                    key={i}
                                    id={u.id}
                                    name={u.name}
                                    status={u.status}
                                    isFollow={u.followed}
                                    imgUrl={u.photos.small}
                                    onClick={this.props.followToggle}
                                />)
                        })
                    }
                </div>
            </div>
        )
    }
}




function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        followToggle: (e) => dispatch(followToggle(e.target.id)),
        setUsers: (users) => dispatch(setUsers(users)),
        changeCurrentPage: (id) => dispatch(changeCurrentPage(id)),
        setTotalUsersCount: (count) => dispatch(setTotalUsersCount(count))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)




