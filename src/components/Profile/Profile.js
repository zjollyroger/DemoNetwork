import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import profile from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
       <div className={profile.content}>
            <ProfileInfo/>
           <MyPosts posts={props.posts} addPost={props.addPost} typingNewPost={props.typingNewPost} typingValue={props.typingValue}/>
       </div>

    );
}

export default Profile;