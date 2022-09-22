import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/FormValidator";
import {Input} from "../common/FormControls/FormControls";

const Login = () => {
    return(
        <div>
            <h3>Login please</h3>

            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const onSubmit = (data) => {
    console.log(data);
}

const maxLengthValidate10 = maxLengthCreator(10);

const LoginForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div><Field validate={[required, maxLengthValidate10]} component={Input} type='text' placeholder='login' name='login'/></div>
            <div><Field validate={[required, maxLengthValidate10]} component={Input} type='password' placeholder='password' name='password'/></div>
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