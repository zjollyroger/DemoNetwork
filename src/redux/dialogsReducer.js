const ADD_MSG = 'ADD_MSG';
const TYPE_NEW_MSG = 'TYPE_NEW_MSG';

export const addMsgActionCreator = () => ({type: ADD_MSG});
export const onMsgChangeActionCreator = (text) => ({type: TYPE_NEW_MSG, newMsg: text});


const dialogsReducer = (state, action) => {

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