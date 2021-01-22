import React from 'react';
import d from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className = {(props.active === 'true') ? d.item + ' ' + d.active : d.item}>
            <NavLink to={'/dialogs/'+props.id}> {props.name}</NavLink>
        </div>
    );
}

export default Dialog;