const SET_USER_DATA = 'SET_USER_DATA';
const IS_FETCHING = 'IS_FETCHING';

export const setAuthUserDataActionCreator = (userId, email, login) => ({type: SET_USER_DATA, data:{userId, email, login}});
export const setIsFetchingActionCreator = (isFetching) =>  ({type: IS_FETCHING, isFetching});

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