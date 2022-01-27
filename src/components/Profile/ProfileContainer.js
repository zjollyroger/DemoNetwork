import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {GetProfileData,setUserProfile} from '../../redux/profileReducer';
import {withRouter, Redirect} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        let id = (!userId) ? (this.props.authId || 2) : userId;
        this.props.GetProfileData(id);
    }

    render() {

        if (!this.props.isAuth)  return <Redirect to={'/login'}/>


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
            isAuth: state.auth.isAuth,
        }
    )
}


let WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(MapStateToProps, {setUserProfile, GetProfileData})(WithRouterProfileContainer);