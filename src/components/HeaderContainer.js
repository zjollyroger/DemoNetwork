import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserDataActionCreator as setAuthUserData } from "../redux/authReducer";
import {connect} from "react-redux";
import {setIsFetchingAC as setIsFetching} from "../redux/usersReducer";
import Preloader from "./common/Preloader/Preloader";
import {UsersAPI} from "../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        UsersAPI.Auth().then(response => {
                // console.log(response.data, 'api here');
            this.props.setIsFetching(false);
                if(response.resultCode === 0) {
                    let {id, email, login} = response.data;
                    this.props.setAuthUserData( id, email, login);

                   /* UsersAPI.GetProfileData(id).then(response => {
                        console.log('my profile data', response);
                    });*/
                }
            }
        );
    }

    render() {
        return(
            <>
                {
                    this.props.isFetching ?
                        <Preloader/>
                        :
                        <Header {...this.props}></Header>
                }
            </>

        )
    }


}

const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    isFetching: state.auth.isFetching,
})

export default connect(mapStateToProps,{setAuthUserData, setIsFetching}) (HeaderContainer);