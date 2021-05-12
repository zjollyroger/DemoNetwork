import React from 'react';
import myPosts from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostText} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    // let state = props.store.getState();

    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator());
    // }
    //
    // let onPostChange = (text) => {
    //     let action = updateNewPostText(text);
    //     props.store.dispatch(action);
    // }

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState();
                let addPost = () => {
                   store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostText(text);
                    store.dispatch(action);
                }

                return (
                    <MyPosts updateNewPostText={onPostChange}
                             addPost={addPost}
                             posts={state.profilePage.posts}
                             typingValue={state.profilePage.newPostText}
                    />
                );
            }
        }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;