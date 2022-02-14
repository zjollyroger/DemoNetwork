import React from "react";
import { Field, reduxForm } from 'redux-form'

const onSubmit = (formData) => {
    console.log(formData);
    // props.LoginThunk(formData.login, formData.password);
}

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

const ContactForm = reduxForm({
    // a unique name for the form
    form: 'loginForm'
})(LoginForm);


const Login = (props) => {
    return(
        <div>
            <h1>Login Page</h1>
            <ContactForm onSubmit={onSubmit} LoginThunk={props.LoginThunk}/>
        </div>
    )
};



export default Login;