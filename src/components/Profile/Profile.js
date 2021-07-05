import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import profile from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
       <div className={profile.content}>
            <ProfileInfo profile={props.profile}/>
           <MyPostsContainer/>
       </div>
    );
}

export default Profile;