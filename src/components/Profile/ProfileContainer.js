import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {GetProfileData,setUserProfile} from '../../redux/profileReducer';
import {withRouter, Redirect} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        let id = (!userId) ? (this.props.authId || 2) : userId;
        this.props.GetProfileData(id);
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let MapStateToProps = (state) => {
    return (
        {
            profile: state.profilePage.profile,
            authId: state.auth.userId,
        }
    )
}

let ProfileWithAuthRedirect = withAuthRedirect(ProfileContainer)

let WithRouterProfileContainer = withRouter(ProfileWithAuthRedirect);

export default connect(MapStateToProps, {setUserProfile, GetProfileData})(WithRouterProfileContainer);