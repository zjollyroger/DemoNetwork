import React from 'react';
import myPosts from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.posts;
    let postElements = posts.map(post =>
        <Post msg={post.post} likeCount={post.likesCount}/>
        );

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text   = newPostElement.current.value;
        props.typingNewPost(text);
    }

    return (
        <div>
            My posts
            <div>
                New posts
            </div>
            <textarea value={props.typingValue} ref={newPostElement} onChange={onPostChange}
                      id="" cols="30" rows="10" />
            <button onClick={props.addPost}> Добавить</button>
            <div className={myPosts.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;