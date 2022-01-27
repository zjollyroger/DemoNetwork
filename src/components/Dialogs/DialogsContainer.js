import React from 'react';
import {addMsgActionCreator, onMsgChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return (
        {
            typingValue: state.dialogsPage.newMsg,
            dialogs: state.dialogsPage.dialogs,
            messages: state.dialogsPage.messages,
            isAuth: state.auth.isAuth,
        }
    )
};


const mapDispatchToProps = (dispatch) => {
    return (
        {
            addMsg: () => {
                dispatch(addMsgActionCreator())
            },
            onMsgChange: (textMsg) => {
                dispatch(onMsgChangeActionCreator(textMsg))
            },
        }
    )
};

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;

