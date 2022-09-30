import profileReducer, {addPost, deletePost} from "../redux/profileReducer";
import expect from "expect";

// 1.init data
let state = {posts: [
        {id: 1, post: 'Hi everyone!', likesCount: 1},
        {id: 2, post: 'Its my first p0$t, btchs!', likesCount: 21},
        {id: 3, post: 'check it out', likesCount: 3},
        {id: 4, post: 'grab the spoon!', likesCount: 15},
    ]};


it('should be new post',  () => {
    let action = addPost('Hello from testing');

    // 2. test
    const addPostTest = profileReducer(state, action);
// 3. expect
    expect(addPostTest.posts.length).toBe(5);
});


it('should be 3 posts after deleting', () => {
   let action = deletePost(1);
   let newState = profileReducer(state, action);

   expect(newState.posts.length).toBe(3);
});

it('should be 4 posts after try to deleting incorect post', () => {
    let action = deletePost(100);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});