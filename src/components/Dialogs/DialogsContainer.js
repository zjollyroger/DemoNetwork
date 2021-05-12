import React from 'react';
import d from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMsgActionCreator, onMsgChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState();


                let addMsg = () => {
                    store.dispatch(addMsgActionCreator());
                }

                let onMsgChange = (textMsg) => {
                    store.dispatch(onMsgChangeActionCreator(textMsg));
                }

                return (
                    <Dialogs typingValue={state.dialogsPage.newMsg}
                             dialogs={state.dialogsPage.dialogs}
                             messages={state.dialogsPage.messages}
                             addMsg={addMsg}
                             MsgChange={onMsgChange}
                    />
                );
            }
        }

        </StoreContext.Consumer>
    );
}

export default DialogsContainer;