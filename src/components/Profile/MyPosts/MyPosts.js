import React from 'react';
import myPosts from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.posts;
    let postElements = posts.map(post =>
        <Post msg={post.post} likeCount={post.likesCount}/>
        );

    let newPostElement = React.createRef();

    let addPost = () => {
        let action = {type:'ADD_POST'};
        props.dispatch(action);
    }

    let onPostChange = () => {
        let text   = newPostElement.current.value;
        props.dispatch({type:'TYPE_NEW_TEXT', newText: text});
    }

    return (
        <div>
            My posts
            <div>
                New posts
            </div>
            <textarea value={props.typingValue} ref={newPostElement}
                      onChange={onPostChange}
                      id="" cols="30" rows="10" />
            <button onClick={addPost}> Добавить</button>
            <div className={myPosts.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;