import React from 'react';
import d from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let typingValue = props.typingValue;
    let dialogs = props.dialogs;
    let messages = props.messages;
    let dialogsElements = dialogs.map(el => <Dialog id={el.id} name={el.name}/>);
    let messagesElements = messages.map(message => <Message message={message.message}/>);


    let onAddMsg = () => {
        props.addMsg();
    }

    let onMsgChange = (e) => {
        let textMsg = e.target.value;
        props.onMsgChange(textMsg);
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

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
                <textarea name="" id="" cols="30" rows="10" value={typingValue} onChange={onMsgChange}
                    placeholder='live your feed in history and let computer machine work!'
                >

                </textarea>
                <div>
                    <button onClick={onAddMsg} >Добавить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;