import React from 'react';
import p from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const data = props.profile;
    const bigImg = (props.profile.photos.large) ? props.profile.photos.large : null;

    return (
        <div className={p.content}>
            {/*<div>
                <img className={p.ava}
                     src="https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png" alt=""/>
            </div>*/}


            <div className={p.userProfile}>
                <div className={p.userImg}>
                    <img src={bigImg} alt="avatar"
                         className={(data.lookingForAJob) ? p.lookingForAJob : p.notLookingForAJob}/>
                </div>

                <div className={p.userProfileData}>

                    <div className={p.userName}>
                        {data.fullName}
                    </div>

                    <div className={p.userStatus}>
                        {data.aboutMe}
                    </div>

                    <div className={p.userStatus}>
                        {data.lookingForAJobDescription}
                    </div>


                </div>

                <div className={p.userContacts}>
                    <div >Contacts</div>
                    <ul>
                        <li>fb: {data.contacts.facebook}</li>
                        <li>Site: {data.contacts.website}</li>
                        <li>vk: {data.contacts.vk}</li>
                        <li>twitter: {data.contacts.twitter}</li>
                        <li>instagram: {data.contacts.instagram}</li>
                        <li>youtube: {data.contacts.youtube}</li>
                        <li>github: {data.contacts.github}</li>
                        <li>mainLink: {data.contacts.mainLink}</li>
                    </ul>
                </div>


            </div>
        </div>
    );
}

export default ProfileInfo;