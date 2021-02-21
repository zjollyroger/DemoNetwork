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

    getState () {
        return this._state;
    },

    _rerender () {},

    typingNewPost  (newPost) {
        this._state.profilePage.newPost = newPost;
        this._rerender(this._state);
    },

    addPost () {
        //{id: 1, post: 'Hi everyone!', likesCount: 1},
        let newPost = {
            id: 15, post: this._state.profilePage.newPost, likesCount: 555,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPost = '';
        this._rerender(this._state);
    },

    subscribe (observer) {
        this._rerender = observer;
    }
}


window.store = store;
export default store;