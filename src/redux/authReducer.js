import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const IS_FETCHING = 'IS_FETCHING';

export const setAuthUserData = (userId, email, login, isAuth= false) => ({type: SET_USER_DATA, payload:{userId, email, login, isAuth}});
export const setIsFetching = (isFetching) =>  ({type: IS_FETCHING, isFetching});

export const AuthMeThunk = () => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        AuthAPI.AuthMe().then(response => {
            // console.log(response.data, 'api here');
               dispatch(setIsFetching(false));
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            }
        );
    }
};

export const LoginThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        AuthAPI.Login(email, password, rememberMe).then(response => {
            console.log(response);
            //succes
            if(response.data.resultCode === 0) {
                console.log(response.data)
                let {userId} = response.data.data;

                //need login
                AuthAPI.AuthMe().then(res => {
                    if (res.data.resultCode === 0) {
                        let {login} = res.data.data;
                        dispatch(setAuthUserData(userId, email, login, true));
                    }
                })

                // Запустили выше
                // dispatch(setAuthUserData(userId, email, email, true));
            }
            // error email or password
            else {
                let message = (response.data.messages && response.data.messages.length>0)
                    ? response.data.messages[0]
                    : "Common error of authorization";
                dispatch(stopSubmit("loginForm", {_error: message }));
            }
        });
    }
}

export const LogoutThunk = () => {
    return (dispatch) => {
        AuthAPI.Logout().then(res => {
            console.log(res);
            if (res.data.resultCode === 0) {
                let options = {userId: null, email: null, login: null, isAuth: false};
                dispatch(setAuthUserData(options));
            }
        });
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
                ...action.payload,
                // isAuth: true,
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