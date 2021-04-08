const ADD_POST = 'ADD_POST';
const TYPE_NEW_TEXT = 'TYPE_NEW_TEXT';

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: TYPE_NEW_TEXT, newText: text});

const profileReducer = (state, action) => {


    let typingNewPost = (newPostText) => {
        state.newPostText = newPostText;
    };

    let addPost = () => {
        //{id: 1, post: 'Hi everyone!', likesCount: 1},
        let newPost = {
            id: 15, post: state.newPostText, likesCount: 555,
        }
        state.posts.push(newPost);
        state.newPostText = '';
    };

    switch (action.type) {
        case (ADD_POST) :
            addPost();
            return (state);
        case (TYPE_NEW_TEXT) :
            typingNewPost(action.newText);
            return (state);
        default:
            return (state);
    }
}

export default profileReducer;
