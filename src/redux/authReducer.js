import {AuthAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const IS_FETCHING = 'IS_FETCHING';

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data:{userId, email, login}});
export const setIsFetching = (isFetching) =>  ({type: IS_FETCHING, isFetching});

export const AuthMeThunk = () => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        AuthAPI.AuthMe().then(response => {
            // console.log(response.data, 'api here');
               dispatch(setIsFetching(false));
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData( id, email, login));
                }
            }
        );
    }
};

export const LoginThunk = (email, password) => {
    return (dispatch) => {
        AuthAPI.Login(email, password);

    }

}

const initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case (SET_USER_DATA) :
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        case (IS_FETCHING) :
            return {
                ...state,
                isFetching: action.isFetching,
            };

        default:
            return (state);
    }

}

export default authReducer;