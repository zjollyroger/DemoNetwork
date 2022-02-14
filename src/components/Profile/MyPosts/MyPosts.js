import React from 'react';
import myPosts from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";



const MyPosts = (props) => {

    let posts = props.posts;
    let postElements = posts.map(post =>
        <Post msg={post.post} likeCount={post.likesCount}/>
        );

    let onAddPost = props.addPost;

     const PostForm = (props) => {
        return(
            <form action="" onSubmit={props.handleSubmit}>
                <div>
                    <Field component='textarea' placeholder='type something' name='post'/>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </form>
        )
    };

    const AddPostForm = reduxForm({
        // a unique name for the form
        form: 'postForm'
    })(PostForm);

    const onSubmit = (textData) => {
        console.log(textData);
        onAddPost(textData.post)
    }


    return (
        <div>
            <h3>
                My posts
            </h3>

            <div>
                <AddPostForm onSubmit={onSubmit} typingValue={props.typingValue}/>
            </div>


            <div className={myPosts.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;