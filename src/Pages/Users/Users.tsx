import React from 'react';
import classes from './Users.module.css'
import {connect} from "react-redux";
import UserCard from "./User/UserCard";
import Paginator from "./Paginator/Paginator"
import {
    changeCurrentPage, follow, followFetchingToggle,
    requestUsers, unFollow,
} from "../../redux/actions/UsersActionCreators";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Loader from "../../components/Loader/Loader";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsTypes = {
    currentPage: number
    users: Array<UserType>
    isFetch: boolean
    totalUsersCount: number
    pageSize: number
    followFetchingId: Array<number>
}

type MapDispatchPropsTypes = {
    changeCurrentPage: (id: number) => void
    requestUsers: (id: number, pageSize: number) => void
    unFollow: () => void
    follow: () => void
    followFetchingToggle: () => void
}

type PropsTypes = MapStatePropsTypes & MapDispatchPropsTypes

class Users extends React.Component<PropsTypes> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onChangePage = (e: { target: HTMLInputElement }): void => {
        this.props.changeCurrentPage(+e.target.id)
        this.props.requestUsers(+e.target.id, this.props.pageSize)
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

                <Paginator
                    pages={pages}
                    changePage={this.onChangePage}
                    currentPage={this.props.currentPage}
                />

                <div className={classes.Users__container}>
                    {
                        this.props.isFetch ? <Loader /> : null
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
                                    btnDisabledIdArray={this.props.followFetchingId}
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

function mapStateToProps(state: AppStateType): MapStatePropsTypes {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetch: state.usersPage.isFetch,
        followFetchingId: state.usersPage.followFetchingId,
    }
}

export default connect(mapStateToProps,
    {
        changeCurrentPage,
        requestUsers,
        followFetchingToggle,
        follow,
        unFollow
    }
)(withAuthRedirect(Users))




