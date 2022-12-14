import {ProfileApi, UsersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SELECT_USER = 'SELECT_USER';
const SET_STATUS = 'SET_STATUS';
const IS_FETCHING = 'IS_FETCHING';
const DELETE_POST = "DELETE_POST";

// action creators
export const addPost = (post) => ({type: ADD_POST, post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

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
        dispatch(setIsFetching(true));
        ProfileApi.UpdateStatus(status).then(res => {
            // console.log(res);
            dispatch(setIsFetching(false));
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

    profile: null,
    selectedUser: null,
    status: '',
    isFetching: false,
};

const profileReducer = (state = initialState, action) => {

      switch (action.type) {
        case (ADD_POST) : {
            //{id: 1, post: 'Hi everyone!', likesCount: 1},
            let newPost = {
                id: 15, post: action.post, likesCount: 555,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }


          case (SET_USER_PROFILE) :
              return {...state, profile: action.profile};

          case (SELECT_USER) :
              return {...state, selectedUser: action.userId};

          case (SET_STATUS) :
              return {...state, status: action.status};

          case (IS_FETCHING) :
              return {
                  ...state, isFetching: action.isFetching
              };

          case (DELETE_POST):
              return {
                  ...state,
                  posts: state.posts.filter(post => post.id !== action.postId)};


        default:
            return (state);
    }
}

export default profileReducer;
