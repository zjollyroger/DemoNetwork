const SET_USER_DATA = 'SET_USER_DATA';

export const setAuthUserDataActionCreator = (userId, email, login) => ({type: SET_USER_DATA, data:{userId, email, login}});

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

        default:
            return (state);
    }

}

export default authReducer;