const ADD_MSG = 'ADD_MSG';

export const addMsgActionCreator = (message) => ({type: ADD_MSG, message});

const initialState = {
    dialogs: [
        {id: '1', name: 'John'},
        {id: '2', name: 'Jo'},
        {id: '3', name: 'Bob'},
        {id: '4', name: 'Karrie'},
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'shalom'},
        {id: 3, message: 'hek lol keck'},
        {id: 4, message: 'kuku'},
    ],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case (ADD_MSG) :
            let newMsg = {id: 15, message: action.message}
            return {
                ...state,
                messages: [ ...state.messages, newMsg],
            };

        default:
            return (state);
    }

}

export default dialogsReducer;