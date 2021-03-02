const ADD_POST = 'ADD_POST';
const TYPE_NEW_TEXT = 'TYPE_NEW_TEXT';
const ADD_MSG = 'ADD_MSG';
const TYPE_NEW_MSG = 'TYPE_NEW_MSG';

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
                {id: 1, message: 'hi'},
                {id: 2, message: 'shalom'},
                {id: 3, message: 'hel lol keck'},
                {id: 4, message: 'kuku'},
            ],
            newMsg: '',
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

    //POST
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

    // dialogs messages
    _typingNewMsg  (newMsg) {
        this._state.messagesPage.newMsg = newMsg;
        this._callSubscriber(this._state);
    },
    _addMsg () {
        let newMsg = {id: 15, message: this._state.messagesPage.newMsg,}
        this._state.messagesPage.messages.push(newMsg);
        this._state.messagesPage.newMsg = '';
        this._callSubscriber(this._state);
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // action is object, necessarily contained type
        switch(action.type) {
            case (ADD_POST) :  this._addPost(); break;
            case (TYPE_NEW_TEXT) :  this._typingNewPost(action.newText); break;
            case (ADD_MSG) :  this._addMsg(); break;
            case (TYPE_NEW_MSG) :  this._typingNewMsg(action.newMsg); break;
        }
    },
}


   export const addPostActionCreator = () =>  ({type: ADD_POST});
   export const onPostChangeActionCreator = (text) => ({type: TYPE_NEW_TEXT,newText: text});
    export const addMsgActionCreator = () =>  ({type: ADD_MSG});
   export const onMsgChangeActionCreator = (text) => ({type: TYPE_NEW_MSG,newMsg: text});



window.store = store;
export default store;