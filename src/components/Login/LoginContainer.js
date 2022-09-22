import React from "react";
import {connect} from "react-redux";
import {LoginThunk} from "../../redux/authReducer";
import Login from "./Login";

let mapStateToProps = (state) => {
    return(
        {
            // email: state.form.loginForm.login,
            // password: state.form.loginForm.password,
        }
    )
};

const LoginContainer = connect(mapStateToProps, {LoginThunk})(Login);

export default LoginContainer;