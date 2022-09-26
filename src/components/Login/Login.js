import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/FormValidator";
import {Input} from "../common/FormControls/FormControls";
import Redirect from "react-router-dom/es/Redirect";
import style from "../common/FormControls/FormControls.module.css";

const Login = (props) => {

    const onSubmit = (data) => {
        // console.log(data);
        props.LoginThunk(data.email, data.password, data.rememberMe);
    }

    if (props.isAuth) return <Redirect to={'/profile'} />

    return(
        <div>
            <h3>Login please</h3>

            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

//redux form

const maxLengthValidate30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit} className={props.error ? style.formCommonError : ''}>
            {props.error && <div className={style.errorText}>{props.error}</div>}
            <div><Field validate={[required, maxLengthValidate30]} component={Input} type='text' placeholder='login' name='email'/></div>
            <div><Field validate={[required, maxLengthValidate30]} component={Input} type='password' placeholder='password' name='password'/></div>
            <div><Field component={Input} type='checkbox' name='remember'/>Remember me</div>
            <button>Sign in</button>

        </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'loginForm'})(LoginForm);

export default Login;
/*
import { Field, reduxForm } from 'redux-form'
import {LoginThunk} from "../../redux/authReducer";



const Login = (props) => {


    const LoginForm = (props) => {
        return(
            <form action="" onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder='login' name="login" type="text" component="input"/>
                </div>
                <div>
                    <Field placeholder='pass' name="password" type="password" component="input"/>
                </div>
                <div>
                    <Field id='remember' name="remember" type="checkbox" component="input"/>Remember me
                </div>
                <button type="submit" >Login</button>
            </form>
        )
    };

    const ReduxLoginForm = reduxForm({
        // a unique name for the form
        form: 'loginForm'
    })(LoginForm);

    const onSubmit = (data) => {
        LoginThunk(data.login, data.password);
        console.log(data.login, data.password, 'data');
    }

    return(
        <div>
            <h1>Login Page</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
};



export default Login;
*/