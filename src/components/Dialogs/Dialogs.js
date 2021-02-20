import React from 'react';
import d from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = props.dialogs;
    let messages = props.messages;
    let dialogsElements = dialogs.map(el => <Dialog id={el.id} name={el.name}/>);
    let messagesElements = messages.map(message => <Message message={message.massage}/>);

    let newElementDialog = React.createRef();

    let addDialog = () => {
        alert(newElementDialog.current.value);
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
                <textarea ref={newElementDialog} name="" id="" cols="30" rows="10"></textarea>
                <div>
                    <button onClick={addDialog}>Добавить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;