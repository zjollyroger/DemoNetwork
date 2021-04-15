import React from 'react';
import p from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
       <div className={p.content}>
           <div>
               <img className={p.ava} src="https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png" alt=""/>
           </div>
           <div>
               ava + description
           </div>
       </div>

    );
}

export default ProfileInfo;