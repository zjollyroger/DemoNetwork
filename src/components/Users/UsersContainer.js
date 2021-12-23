import React from 'react';
import {
    followAC as followOn,
    unfollowAC as unfollowOn,
    setUsersAC as setUsers,
    setSelectedPageAC as setSelectedPage,
    setTotalUsersCountAC as setTotalUsersCount,
    setIsFetchingAC as setIsFetching,
    setIsDisable as setIsDisable
} from "../../redux/usersReducer";
import {connect} from "react-redux";
// import * as axios from "axios";
import Users from "./Users";
// import Preloader from "../common/Preloader/Preloader";
import {UsersAPI} from "../../api/api";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        UsersAPI.getUsers(this.props.selectedPage, this.props.pageSize).then(data => {
                console.log(data.items, 'api here');
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);

            }
        );
    }


    onPageChange = (page) => {
        this.props.setSelectedPage(page);
        this.props.setIsFetching(true);
        UsersAPI.getUsers(page, this.props.pageSize).then(data => {
                console.log(data.items, 'api here');
                this.props.setUsers(data.items);
                this.props.setIsFetching(false);
            }
        );
    }

    render() {
        return (
            <>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChange={this.onPageChange}
                       selectedPage={this.props.selectedPage}
                       users={this.props.users}
                       unfollowOn={this.props.unfollowOn}
                       followOn={this.props.followOn}
                       isDisable={this.props.isDisable}
                       setIsDisable={this.props.setIsDisable}
                />

            </>

        );
    }
}


const mapStateToProps = (state) => {
    return (
        {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            selectedPage: state.usersPage.selectedPage,
            isFetching: state.usersPage.isFetching,
            isDisable: state.usersPage.isDisable,
        }
    )
};

// оставляю для просмотра, все упрощено в 58 уроке
/*const mapDispatchToProps = (dispatch) => {
    return (
        {
            followOn: (userId) => {
                dispatch(followAC(userId))
            },
            unfollowOn: (userId) => {
                dispatch(unfollowAC(userId))
            },
            setUsers: (users) => {
                dispatch(setUsersAC(users))
            },
            setSelectedPage: (selectedPage) => {
                dispatch(setSelectedPageAC(selectedPage))
            },
            setTotalUsersCount: (usersCount) => {
                dispatch(setTotalUsersCountAC(usersCount))
            },
            setIsFetching:  (isFethcing) => {
                dispatch(setIsFetchingAC(isFethcing))
            },
        }
    )
};*/

const UsersContainer = connect(mapStateToProps,
    {followOn, unfollowOn, setUsers, setSelectedPage, setTotalUsersCount, setIsFetching, setIsDisable}
)(UsersAPIComponent);

export default UsersContainer;

