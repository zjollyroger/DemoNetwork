const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const IS_DISABLE = 'IS_DISABLE';

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setSelectedPageAC = (selectedPage) => ({type: SET_PAGE, selectedPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setIsFetchingAC = (isFetching) => ({type: IS_FETCHING, isFetching});
export const setIsDisable = (isDisable, userId) => ({type: IS_DISABLE, isDisable, userId});

const initialState = {
    users: [
        // {id: '1', name: 'John', status: 'irock', location: {id: 0, city: 'Minsk', country: 'Belarus'}, followed: true, avaUrl: '',},
        // {id: '2', name: 'Ivan', status: 'watch tv', location: {id: 0, city: 'Moscow', country: 'Russia'} , followed: true,},
        // {id: '3', name: 'Jogahn Gunz', status: 'playing', location: {id: 0, city: 'Berlin', country: 'Germany'}, followed: false,},
        // {id: '4', name: 'Freedrech', status: 'listen music', location: {id: 0, city: 'Naked City', country: 'Austria'} , followed: false,},
    ],
    pageSize: 25,
    totalUsersCount: 0,
    selectedPage: 1,
    isFetching: 1,
    isDisable: [],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case (FOLLOW) :
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true}
                    }
                    return user;
                })
            };

        case (UNFOLLOW) :
            return {
                ...state,
                users: state.users.map(user=> {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };

        case (SET_USERS) :
            return {
                ...state, users: [...action.users],
                            };

        case (SET_PAGE) :
            return {
                ...state, selectedPage: action.selectedPage,
            };

        case (SET_TOTAL_USERS_COUNT) :
            return {
                ...state, totalUsersCount: action.totalUsersCount,
            };

        case (IS_FETCHING) :
            return {
            ...state, isFetching: action.isFetching
        }

        case (IS_DISABLE) :
            return {
                ...state,
                isDisable: (action.isDisable) ? [...state.isDisable, action.userId] : state.isDisable.filter(user => user != action.userId )
            }

        default:
            return (state);
    }

}

export default usersReducer;