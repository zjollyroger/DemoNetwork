import React from 'react';
import {
    followThunkCreator, unfollowThunkCreator, getUsers
} from "../../redux/usersReducer";
import {connect} from "react-redux";
// import * as axios from "axios";
import Users from "./Users";
// import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getIsDisable,
    getPageSizeSelector,
    getSelectedPage,
    getTotalUsersCount,
    getUsersSelector, getUsersSuperSelector
} from "../../selectors/usersSelector";

class UsersAPIComponent extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.selectedPage, this.props.pageSize);

    }


    onPageChange = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        console.log('render');
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
    console.log("fake dispatch");
    return (
        {
            // users: state.usersPage.users,
            // pageSize: state.usersPage.pageSize,
            // totalUsersCount: state.usersPage.totalUsersCount,
            // selectedPage: state.usersPage.selectedPage,
            // isDisable: state.usersPage.isDisable,

        //    selectors:
        //     users: getUsersSelector(state),
            users: getUsersSuperSelector(state),
            pageSize: getPageSizeSelector(state),
            totalUsersCount: getTotalUsersCount(state),
            selectedPage: getSelectedPage(state),
            isDisable: getIsDisable(state),
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

const UsersContainer = compose(
    connect(mapStateToProps,{getUsers, unfollowThunkCreator, followThunkCreator}),
    withAuthRedirect)
    (UsersAPIComponent);


export default UsersContainer;

