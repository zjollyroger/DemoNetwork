import React from 'react';
import d from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMsgActionCreator, onMsgChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();


    let addMsg = () => {
        props.store.dispatch(addMsgActionCreator());
    }

    let onMsgChange = (textMsg) => {
        props.store.dispatch(onMsgChangeActionCreator(textMsg));
    }

    return <Dialogs typingValue = {state.dialogsPage.newMsg}
                    dialogs = {state.dialogsPage.dialogs}
                    messages = {state.dialogsPage.messages}
                    addMsg = {addMsg}
                    MsgChange = {onMsgChange}
                        />
                    }

                    export default DialogsContainer;