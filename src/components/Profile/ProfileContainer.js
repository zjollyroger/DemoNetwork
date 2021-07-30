import React from "react";
import profile from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import p from "./ProfileInfo/ProfileInfo.module.css";
import {connect} from "react-redux";
import * as axios from "axios";
import Profile from "./Profile";
import {setUserProfileAC as setUserProfile} from '../../redux/profileReducer';
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = (!this.props.match.params.userId) ? 2 : this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {withCredentials: true}).then(response => {
                console.log(response.data, 'api here');
                this.props.setUserProfile(response.data);
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
        {profile: state.profilePage.profile}
    )
}


let WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(MapStateToProps, {setUserProfile})(WithRouterProfileContainer);