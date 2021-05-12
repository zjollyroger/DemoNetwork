import React from 'react';
import myPosts from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let posts = props.posts;
    let postElements = posts.map(post =>
        <Post msg={post.post} likeCount={post.likesCount}/>
        );

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            My posts
            <div>
                New posts
            </div>
            <textarea value={props.typingValue}

                      onChange={onPostChange}
                      id="" cols="30" rows="10" />
            <button onClick={onAddPost}> Добавить</button>
            <div className={myPosts.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;