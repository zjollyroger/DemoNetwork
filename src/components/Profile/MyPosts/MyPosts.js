import React from 'react';
import myPosts from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.posts;
    let postElements = posts.map(post =>
        <Post msg={post.post} likeCount={post.likesCount}/>
        );

    return (
        <div>
            My posts
            <div>
                New posts
            </div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button > Добавить</button>
            <div className={myPosts.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;