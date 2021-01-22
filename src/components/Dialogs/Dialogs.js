import React from 'react';
import d from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = props.dialogs;
    let messages = props.messages;
    let dialogsElements = dialogs.map( el => <Dialog id={el.id} name={el.name} />);
    let messagesElements = messages.map( message =>  <Message message={message.massage}/>);

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>

                { dialogsElements }

            </div>
            <div className={d.msgs}>

                {messagesElements}

            </div>


        </div>
    );
}

export default Dialogs;