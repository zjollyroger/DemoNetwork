import React from 'react';
import Header from "./Header";
import {AuthMeThunk, LogoutThunk} from "../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.AuthMeThunk();
    }
    render() {
        return(

            <>
                {
                    <Header {...this.props}></Header>
                }
            </>

        )
    }


}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps,{AuthMeThunk, LogoutThunk}) (HeaderContainer);