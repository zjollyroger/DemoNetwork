const ADD_POST = 'ADD_POST';
const TYPE_NEW_TEXT = 'TYPE_NEW_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: TYPE_NEW_TEXT, newText: text});
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});

const initialState = {
    posts: [
        {id: 1, post: 'Hi everyone!', likesCount: 1},
        {id: 2, post: 'Its my first p0$t, btchs!', likesCount: 21},
        {id: 3, post: 'check it out', likesCount: 3},
        {id: 4, post: 'grab the spoon!', likesCount: 15},
    ],
    newPostText: '',
    profile: null,
    selectedUser: null,
};

const profileReducer = (state = initialState, action) => {

      switch (action.type) {
        case (ADD_POST) : {
            //{id: 1, post: 'Hi everyone!', likesCount: 1},
            let newPost = {
                id: 15, post: state.newPostText, likesCount: 555,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case (TYPE_NEW_TEXT) :
            return {...state, newPostText: action.newText};

          case (SET_USER_PROFILE) :
              return {...state, profile: action.profile};

          case ('SELECT_USER') :
              return {...state, selectedUser: action.userId};

        default:
            return (state);
    }
}

export default profileReducer;
