const ADD_MSG = 'ADD_MSG';
const TYPE_NEW_MSG = 'TYPE_NEW_MSG';

export const addMsgActionCreator = () => ({type: ADD_MSG});
export const onMsgChangeActionCreator = (text) => ({type: TYPE_NEW_MSG, newMsg: text});

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
        {id: 3, message: 'hel lol keck'},
        {id: 4, message: 'kuku'},
    ],
    newMsg: '',
}

const dialogsReducer = (state = initialState, action) => {

    let typingNewMsg = (newMsg) => {
        state.newMsg = newMsg;
    };
    let addMsg = () => {
        let newMsg = {id: 15, message: state.newMsg,}
        state.messages.push(newMsg);
        state.newMsg = '';
    };

    switch (action.type) {
        case (ADD_MSG) :
            addMsg();
            return (state);
        case (TYPE_NEW_MSG) :
            typingNewMsg(action.newMsg);
            return (state);
        default:
            return (state);
    }

}

export default dialogsReducer;