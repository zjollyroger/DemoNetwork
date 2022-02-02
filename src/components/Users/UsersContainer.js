import React from 'react';
import {
    followThunkCreator, unfollowThunkCreator, getUsers
} from "../../redux/usersReducer";
import {connect} from "react-redux";
// import * as axios from "axios";
import Users from "./Users";
// import Preloader from "../common/Preloader/Preloader";
import {UsersAPI} from "../../api/api";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class UsersAPIComponent extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.selectedPage, this.props.pageSize);

    }


    onPageChange = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return (
            <div>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChange={this.onPageChange}
                       selectedPage={this.props.selectedPage}
                       users={this.props.users}
                       isDisable={this.props.isDisable}
                       followThunkCreator={this.props.followThunkCreator}
                       unfollowThunkCreator={this.props.unfollowThunkCreator}
                />

            </div>

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

const UsersContainer = withAuthRedirect(connect(mapStateToProps,
    {
        getUsers, unfollowThunkCreator, followThunkCreator,
    }
)(UsersAPIComponent));

export default UsersContainer;

