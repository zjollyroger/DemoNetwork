import React from 'react';
import myPosts from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {

    let posts = props.posts;
    let postElements = posts.map(post =>
        <Post msg={post.post} likeCount={post.likesCount}/>
        );

    // let newPostElement = React.createRef();



    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        // let text = newPostElement.current.value;
        let text = e.target.value;
        props.dispatch(onPostChangeActionCreator(text));
    }

    return (
        <div>
            My posts
            <div>
                New posts
            </div>
            <textarea value={props.typingValue}
                      // ref={newPostElement}
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