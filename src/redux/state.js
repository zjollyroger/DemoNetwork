const ADD_POST = 'ADD_POST';
const TYPE_NEW_TEXT = 'TYPE_NEW_TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi everyone!', likesCount: 1},
                {id: 2, post: 'Its my first p0$t, btchs!', likesCount: 21},
                {id: 3, post: 'check it out', likesCount: 3},
                {id: 4, post: 'grab the spoon!', likesCount: 15},
            ],
            newPost: '',
        },
        messagesPage: {
            dialogs: [
                {id: '1', name: 'John'},
                {id: '2', name: 'Jo'},
                {id: '3', name: 'Bob'},
                {id: '4', name: 'Karrie'},
            ],
            messages: [
                {id: 1, massage: 'hi'},
                {id: 2, massage: 'shalom'},
                {id: 3, massage: 'hel lol keck'},
                {id: 4, massage: 'kuku'},
            ],
        },
        friendsPage: {
            friends: [
                {id: '1', name: 'Rob'},
                {id: '2', name: 'July'},
                {id: '3', name: 'Jane'},
            ],
        }
    },
    _callSubscriber () {},

    getState () {
        return this._state;
    },
    _typingNewPost  (newPost) {
        this._state.profilePage.newPost = newPost;
        this._callSubscriber(this._state);
    },
    _addPost () {
        //{id: 1, post: 'Hi everyone!', likesCount: 1},
        let newPost = {
            id: 15, post: this._state.profilePage.newPost, likesCount: 555,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPost = '';
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // action is object, necessarily contained type
        switch(action.type) {
            case (ADD_POST) :  this._addPost(); break;
            case (TYPE_NEW_TEXT) :  this._typingNewPost(action.newText); break;
        }
    },
}


   export const addPostActionCreator = () =>  ({type: ADD_POST})


    export const onPostChangeActionCreator = (text) => ({type: TYPE_NEW_TEXT,newText: text})



window.store = store;
export default store;