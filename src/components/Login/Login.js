import React from "react";
import { Field, reduxForm } from 'redux-form'

const onSubmit = (formData) => {
    console.log(formData);
}

const LoginForm = (props) => {
    return(
            <form action="" onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder='login' name="login" type="text" component="input"/>
                </div>
                <div>
                    <Field placeholder='pass' name="pass" type="password" component="input"/>
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
            <ContactForm onSubmit={onSubmit}/>
        </div>
    )
};



export default Login;