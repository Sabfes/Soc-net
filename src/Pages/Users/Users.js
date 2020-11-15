import React, {Component} from 'react';
import classes from './Users.module.css'
import {connect} from "react-redux";
import UserCard from "./User/UserCard";
import {changeCurrentPage, followToggle, setTotalUsersCount, setUsers} from "../../redux/actions/UsersActionCreators";
import {getUsers} from "../../api/api";

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFetch: false,
            followFetchingId: []
        }
    }

    followFetchingToggle = (id) => {
        const prevArray = this.state.followFetchingId
        if (prevArray.indexOf( +id ) === -1) {
            this.setState({followFetchingId: [...this.state.followFetchingId, id]})
        } else {
            this.setState({followFetchingId: [...this.state.followFetchingId.filter( i => i !== id)]})
        }

    }

    componentDidMount() {
        // отображение лоадера
        this.setState({isFetch:!this.state.isFetch})

        getUsers(this.props).then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
                this.setState({isFetch:!this.state.isFetch})
            })
            .catch(e => {
                this.setState({isFetch:!this.state.isFetch})
                console.log(e)
            })
    }

    changePage = (e) => {
        this.props.changeCurrentPage(+e.target.id)

        this.setState({isFetch:!this.state.isFetch})
        getUsers(this.props).then(res => {
                this.props.setUsers(res.data.items)
                this.setState({isFetch:!this.state.isFetch})
            })
            .catch(e => {
                console.log(e)
                this.setState({isFetch:!this.state.isFetch})
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
                        this.state.isFetch ? <div className={classes.ldsEllipsis}><div></div><div></div><div></div><div></div></div> : null
                    }
                    {
                        this.state.isFetch
                            ? null
                            : this.props.users.map( (u,i)=>{
                                return (<UserCard
                                    key={i}
                                    id={u.id}
                                    name={u.name}
                                    status={u.status}
                                    isFollow={u.followed}
                                    imgUrl={u.photos.small}
                                    onClick={this.props.followToggle}
                                    btnDisabled={this.state.followFetchingId}
                                    btnFollowClick={this.followFetchingToggle}
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
        followToggle: (id) => dispatch(followToggle(id)),
        setUsers: (users) => dispatch(setUsers(users)),
        changeCurrentPage: (id) => dispatch(changeCurrentPage(id)),
        setTotalUsersCount: (count) => dispatch(setTotalUsersCount(count))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)




