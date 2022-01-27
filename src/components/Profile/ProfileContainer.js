import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfileAC as setUserProfile} from '../../redux/profileReducer';
import {withRouter} from "react-router-dom";
import {UsersAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = (!this.props.match.params.userId) ? (this.props.authId || 2) : this.props.match.params.userId;
        UsersAPI.GetProfileData(userId).then(response => {
                console.log(response, 'api here');
                this.props.setUserProfile(response);
            }
        );
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


let WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(MapStateToProps, {setUserProfile})(WithRouterProfileContainer);