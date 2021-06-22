import React from 'react';
import {followAC, unfollowAC, setUsersAC, setSelectedPageAC, setTotalUsersCountAC} from "../../redux/usersReducer";
import Users from "./UsersClass";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return (
        {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            selectedPage: state.usersPage.selectedPage,
        }
    )
};


const mapDispatchToProps = (dispatch) => {
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
        }
    )
};

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;

