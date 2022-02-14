import React from 'react';
import {addPost} from "../../../redux/profileReducer";
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

/*let mapDispatchToProps = (dispatch) => {
    return (
        {
            addPost: (post) => {dispatch(addPostActionCreator())},
        }
    )
};*/

const  MyPostsContainer = connect (mapStateToProps, {addPost}) (MyPosts);

export default MyPostsContainer;