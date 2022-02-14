import React from 'react';
import {addMsgActionCreator as addMsg} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return (
        {
            dialogs: state.dialogsPage.dialogs,
            messages: state.dialogsPage.messages,
        }
    )
};



const DialogsContainer = compose(connect (mapStateToProps, {addMsg}), withAuthRedirect)(Dialogs)

export default DialogsContainer;

