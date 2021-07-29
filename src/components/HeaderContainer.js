import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserDataActionCreator as setAuthUserData } from "../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
                console.log(response.data.data, 'api here');
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData( id, email, login);
                }
            }
        );
    }

    render() {
        return(
            <Header {...this.props}></Header>
        )
    }


}

const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
})

export default connect(mapStateToProps,{setAuthUserData}) (HeaderContainer);