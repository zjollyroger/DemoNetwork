import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi everyone!', likesCount: 1},
                {id: 2, post: 'Its my first p0$t, btchs!', likesCount: 21},
                {id: 3, post: 'check it out', likesCount: 3},
                {id: 4, post: 'grab the spoon!', likesCount: 15},
            ],
            newPostText: '',
        },
        dialogsPage: {
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

    _callSubscriber() {
    },

    getState() {
        return this._state;
    },

   subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // action is object, necessarily contained type
        this.getState().profilePage = profileReducer(this.getState().profilePage, action);
        this.getState().messagesPage = dialogsReducer(this.getState().messagesPage, action);
        this.getState().friendsPage = friendsReducer(this.getState().friendsPage, action);
        this._callSubscriber();
    }

}

window.store = store;
export default store;