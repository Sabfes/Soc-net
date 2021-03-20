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
// import {AppStateType} from "../../redux/redux-store";
import UsersSearchForm from "./UsersSearchForm/UsersSearchForm";
import {FilterType} from "../../redux/reducers/UsersReducer";
// import App from "../../App";

type MapStatePropsTypes = {
    currentPage: number
    users: Array<UserType>
    isFetch: boolean
    totalUsersCount: number
    pageSize: number
    followFetchingId: Array<number>
    filter: FilterType
}

type MapDispatchPropsTypes = {
    changeCurrentPage: (id: number) => void
    requestUsers: (id: number, pageSize: number, filter: FilterType) => void
    unFollow: () => void
    follow: () => void
    followFetchingToggle: () => void
}

type PropsTypes = MapStatePropsTypes & MapDispatchPropsTypes

class Users extends React.Component<PropsTypes> {
    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props
        this.props.requestUsers(currentPage, pageSize, filter)
    }

    onChangePage = (e: { target: HTMLInputElement }): void => {
        const {filter, pageSize} = this.props
        this.props.requestUsers(+e.target.id, pageSize, filter)
    }

    onFilterChange = (filter: FilterType) => {
        const {pageSize} = this.props
        this.props.requestUsers(1, pageSize, filter)
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

                <UsersSearchForm onFilterChanged={this.onFilterChange}/>

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

function mapStateToProps(state: any): MapStatePropsTypes {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetch: state.usersPage.isFetch,
        followFetchingId: state.usersPage.followFetchingId,
        filter: state.usersPage.filter,
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




