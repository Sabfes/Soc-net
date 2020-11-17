import React, {Component} from 'react';
import classes from './Users.module.css'
import {connect} from "react-redux";
import UserCard from "./User/UserCard";
import {
    changeCurrentPage, follow, followFetchingToggle,
    followToggle, getUsers, unFollow,

} from "../../redux/actions/UsersActionCreators";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class Users extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    changePage = (e) => {
        this.props.changeCurrentPage(+e.target.id)
        this.props.getUsers(+e.target.id, this.props.pageSize)
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
                        this.props.isFetch ? <div className={classes.ldsEllipsis}><div></div><div></div><div></div><div></div></div> : null
                    }
                    {
                        this.props.isFetch
                            ? null
                            : this.props.users.map( (u,i)=>{
                                return (<UserCard
                                    key={i}
                                    id={u.id}
                                    name={u.name}
                                    status={u.status}
                                    isFollow={u.followed}
                                    imgUrl={u.photos.small}
                                    btnDisabled={this.props.followFetchingId}
                                    follow={this.props.follow}
                                    unFollow={this.props.unFollow}
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
        isFetch: state.usersPage.isFetch,
        followFetchingId: state.usersPage.followFetchingId,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        followToggle: (id) => dispatch(followToggle(id)),
        changeCurrentPage: (id) => dispatch(changeCurrentPage(id)),
        getUsers: (currentPage, pageSize) => dispatch(getUsers(currentPage, pageSize)),
        followFetchingToggle: (id) => dispatch(followFetchingToggle(id)),
        follow: (id) => dispatch(follow(id)),
        unFollow: (id) => dispatch(unFollow(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Users))




