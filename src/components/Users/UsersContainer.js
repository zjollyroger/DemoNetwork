import React from 'react';
import {followAC, unfollowAC, setUsersAC, setSelectedPageAC, setTotalUsersCountAC} from "../../redux/usersReducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`).then(response => {
                console.log(response.data.items, 'api here');
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        );
    }

    onPageChange= (page) => {
        this.props.setSelectedPage(page);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
                console.log(response.data.items, 'api here');
                this.props.setUsers(response.data.items);
            }
        );

    }

    render() {

        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChange={this.onPageChange}
                   selectedPage={this.props.selectedPage}
                   users={this.props.users}
                   unfollowOn={this.props.unfollowOn}
                   followOn={this.props.followOn}
            />
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

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (UsersAPIComponent);

export default UsersContainer;

