import React from 'react';
import d from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/FormValidator";


const Dialogs = (props) => {

    let dialogs = props.dialogs;
    let messages = props.messages;
    let dialogsElements = dialogs.map(el => <Dialog id={el.id} name={el.name}/>);
    let messagesElements = messages.map(message => <Message message={message.message}/>);


    let AddMsg = props.addMsg;
    let maxLength50 = maxLengthCreator(50);
    const AddMessageForm = (props) => {
        return(
            <form action="" onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea}
                           validate={[required, maxLength50]}
                           name='message'
                           placeholder={'live your feed in history and let computer machine works!'}/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        )
    };


    const AddMessageFormRedux = reduxForm({
        form: 'AddMessageForm',
    })(AddMessageForm);

    const onSubmit = (messages) => {
        console.log(messages);
        AddMsg(messages.message);
    };

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
                <AddMessageFormRedux onSubmit={onSubmit}/>
            </div>
        </div>
    );
}

export default Dialogs;