import {AuthMeThunk} from "./authReducer";

const INIT_APP = 'INIT_APP';

const initialState = {
    initSuccess: false,
}

const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case INIT_APP :
            return {
                ...state,
                initSuccess: true,
            };
        default:
            return (state);
    }
}

export const initApp = () => ({type: INIT_APP});

export const InitializeAppThunk = () => {
    return (dispatch) => {
        let promise = dispatch(AuthMeThunk());
        promise.then(() => {
            dispatch(initApp());
        });
        /*
     Promise.all([promise1,promise2]).then(()=>{
         dispatch(initApp());
     })*/

    }
}


export default appReducer;