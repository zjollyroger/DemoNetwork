import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let MapStateToProps = (state) => {
    return (
        {
            isAuth: state.auth.isAuth,
        }
    )
}

export const withAuthRedirect = (Component) => {

    let withContainerRedirect = (props) => {
        if (!props.isAuth)  return <Redirect to={'/login'}/>;
        return <Component {...props}/>;
    }

    return connect(MapStateToProps)(withContainerRedirect);
};

