import {ProfileApi, UsersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const TYPE_NEW_TEXT = 'TYPE_NEW_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SELECT_USER = 'SELECT_USER';
const SET_STATUS = 'SET_STATUS';

// action creators
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: TYPE_NEW_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

// Сани
export const getStatus = (userId) => {
    return (dispatch) => {
       ProfileApi.GetStatus(userId).then(res => {
           // console.log(res);
        if (res.status === 200) {
            dispatch(setStatus(res.data));
        }});
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileApi.UpdateStatus(status).then(res => {
            // console.log(res);
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    }
}


export const GetProfileData = (userId) => {
    return (dispatch) => {
        UsersAPI.GetProfileData(userId).then(response => {
                // console.log(response, 'api here');
                dispatch(setUserProfile(response));
            }
        );
    }
};

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
    status: '',
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

          case (SELECT_USER) :
              return {...state, selectedUser: action.userId};

          case (SET_STATUS) :
              return {...state, status: action.status};

        default:
            return (state);
    }
}

export default profileReducer;
