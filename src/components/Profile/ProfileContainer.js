import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {GetProfileData, getStatus, setUserProfile, updateStatus} from '../../redux/profileReducer';
import {withRouter, Redirect} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {ProfileApi} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        let id = (!userId) ? (this.props.authId || 2) : userId;
        this.props.GetProfileData(id);
        this.props.getStatus(id);
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateStatus}/>
        )
    }
}

let MapStateToProps = (state) => {
    return (
        {
            profile: state.profilePage.profile,
            authId: state.auth.userId,
            status: state.profilePage.status,
            isFetching: state.profilePage.isFetching,
        }
    )
}
/*
let ProfileWithAuthRedirect = withAuthRedirect(ProfileContainer)

let WithRouterProfileContainer = withRouter(ProfileWithAuthRedirect);

export default connect(MapStateToProps, {setUserProfile, GetProfileData})(WithRouterProfileContainer);*/

export default  compose(connect(MapStateToProps, {setUserProfile, GetProfileData, updateStatus, getStatus}), withRouter, withAuthRedirect)(ProfileContainer);