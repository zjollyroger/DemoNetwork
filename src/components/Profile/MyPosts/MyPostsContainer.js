import React from 'react';
import myPosts from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostText} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return(
        {
            posts: state.profilePage.posts,
            typingValue: state.profilePage.newPostText,
        }
    )
};

let mapDispatchToProps = (dispatch) => {
    return (
        {
            updateNewPostText: (text) => {dispatch(updateNewPostText(text))},
            addPost: () => {dispatch(addPostActionCreator())},
        }
    )
};

const  MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;