import React from 'react';
import profile from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
       <div className={profile.content}>
            <ProfileInfo profile={props.profile} userId={props.userId}/>
           <MyPostsContainer/>
       </div>
    );
}

export default Profile;