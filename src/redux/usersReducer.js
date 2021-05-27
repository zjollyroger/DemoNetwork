const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

const initialState = {
    users: [
        // {id: '1', name: 'John', status: 'irock', location: {id: 0, city: 'Minsk', country: 'Belarus'}, followed: true, avaUrl: '',},
        // {id: '2', name: 'Ivan', status: 'watch tv', location: {id: 0, city: 'Moscow', country: 'Russia'} , followed: true,},
        // {id: '3', name: 'Jogahn Gunz', status: 'playing', location: {id: 0, city: 'Berlin', country: 'Germany'}, followed: false,},
        // {id: '4', name: 'Freedrech', status: 'listen music', location: {id: 0, city: 'Naked City', country: 'Austria'} , followed: false,},
    ],
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
                ...state, users: [...state.users, ...action.users],
                            };

        default:
            return (state);
    }

}

export default usersReducer;