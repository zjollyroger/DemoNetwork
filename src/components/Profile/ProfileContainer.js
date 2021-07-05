import React from "react";
import profile from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import p from "./ProfileInfo/ProfileInfo.module.css";
import {connect} from "react-redux";
import * as axios from "axios";
import Profile from "./Profile";
import {setUserProfileAC as setUserProfile}  from '../../redux/profileReducer';

class ProfileContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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
    return(
        {profile: state.profilePage.profile}
    )
}




export default connect(MapStateToProps, {setUserProfile}) (ProfileContainer);