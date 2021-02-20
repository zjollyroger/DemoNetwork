import {rerender} from "../Render";

let state = {
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


}

export let typingNewPost = (newPost) => {
    state.profilePage.newPost = newPost;
    rerender(state);
}

export let addPost = () => {
    //{id: 1, post: 'Hi everyone!', likesCount: 1},
    let newPost = {
        id: 15, post: state.profilePage.newPost, likesCount: 555,
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPost = '';
    rerender(state);

}

export default state;