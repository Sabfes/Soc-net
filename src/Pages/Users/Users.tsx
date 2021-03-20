import React, {useEffect} from 'react';
import classes from './Users.module.css'
import {connect, useDispatch, useSelector} from "react-redux";
import UserCard from "./User/UserCard";
import Paginator from "./Paginator/Paginator"
import {
    changeCurrentPage,
    follow,
    followFetchingToggle,
    requestUsers,
    unFollow,
} from "../../redux/actions/UsersActionCreators";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Loader from "../../components/Loader/Loader";
import UsersSearchForm from "./UsersSearchForm/UsersSearchForm";
import {FilterType} from "../../redux/reducers/UsersReducer";
import {AppStateType} from "../../redux/redux-store";
import { useHistory } from 'react-router-dom';
import * as queryString from "querystring";


type MapDispatchPropsTypes = {
    changeCurrentPage: (id: number) => void
    followFetchingToggle: () => void
}

type PropsTypes = MapDispatchPropsTypes

const Users: React.FC<PropsTypes> = (props) => {
    const totalUsersCount = useSelector((state: AppStateType) => state.usersPage.totalUsersCount)
    const currentPage = useSelector((state: AppStateType) => state.usersPage.currentPage)
    const pageSize = useSelector((state: AppStateType) => state.usersPage.pageSize)
    const filter = useSelector((state: AppStateType) => state.usersPage.filter)
    const followFetchingId = useSelector((state: AppStateType) => state.usersPage.followFetchingId)
    const isFetch = useSelector((state: AppStateType) => state.usersPage.isFetch)
    const users = useSelector((state: AppStateType) => state.usersPage.users)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1))

        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch (parsed.friend) {
            case 'null':
                actualFilter = {...actualFilter, friend: null}
                break
            case 'true':
                actualFilter = {...actualFilter, friend: true}
                break
            case 'false':
                actualFilter = {...actualFilter, friend: false}
                break

        }

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(()=> {
        const query: any = {}
        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null ) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage, history])

    const onChangePage = (e: { target: HTMLInputElement }): void => {
        dispatch(requestUsers(+e.target.id, pageSize, filter))
    }

    const onFilterChange = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    const unFollowHandler = (userId: number) => {
        dispatch(unFollow(userId))
    }
    const followHandler = (userId: number) => {
        dispatch(follow(userId))
    }

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = []
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={classes.Users}>
            <h1>users</h1>

            <UsersSearchForm onFilterChanged={onFilterChange}/>

            <Paginator
                pages={pages}
                changePage={onChangePage}
                currentPage={currentPage}
            />

            <div className={classes.Users__container}>
                {
                    isFetch ? <Loader /> : null
                }
                {
                    isFetch
                        ? null
                        : users.map( (u: any,i: number)=>{
                            return (<UserCard
                                key={i}
                                id={u.id}
                                name={u.name}
                                status={u.status}
                                isFollow={u.followed}
                                imgUrl={u.photos.small}
                                btnDisabledIdArray={followFetchingId}
                                follow={followHandler}
                                unFollow={unFollowHandler}
                            />)
                    })
                }
            </div>
        </div>
    )
}

export default connect(null,
    {
        changeCurrentPage,
        followFetchingToggle,
    }
)(withAuthRedirect(Users))


