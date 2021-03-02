import React from 'react';
import d from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMsgActionCreator, onMsgChangeActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let typingValue = props.messagesPage.newMsg;
    let dialogs = props.messagesPage.dialogs;
    let messages = props.messagesPage.messages;
    let dialogsElements = dialogs.map(el => <Dialog id={el.id} name={el.name}/>);
    let messagesElements = messages.map(message => <Message message={message.message}/>);


    let addMsg = () => {
        props.dispatch(addMsgActionCreator());
    }

    let onMsgChange = (e) => {
        let textzzz = e.target.value;
        props.dispatch(onMsgChangeActionCreator(textzzz));
    }

    return (
        <div>
            <div className={d.dialogs}>
                <div className={d.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={d.msgs}>
                    {messagesElements}
                </div>
            </div>
            <div className={d.addDialogDiv}>
                <textarea name="" id="" cols="30" rows="10" value={typingValue} onChange={onMsgChange}>

                </textarea>
                <div>
                    <button onClick={addMsg} >Добавить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;