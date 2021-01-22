import React from 'react';
import post from './Post.module.css';

const Post = (props) => {
    return (
        <div className={post.item}>
            <div className={post.logodiv}>
                <img className={post.logo} src="https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png" alt=""/>
            </div>
            <div className={post.txt}>
               {props.msg}
                <div>
                    <span><img className={post.like} src="https://pngimg.com/uploads/like/like_PNG64.png" alt=""/>
                        {props.likeCount}
                    </span>
                </div>
            </div>


        </div>
    );
}

export default Post;