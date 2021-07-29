import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserDataActionCreator as setAuthUserData } from "../redux/authReducer";
import {connect} from "react-redux";
import {setIsFetchingAC as setIsFetching} from "../redux/usersReducer";
import Preloader from "./common/Preloader/Preloader";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
                console.log(response.data.data, 'api here');
            this.props.setIsFetching(false);
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData( id, email, login);

                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response => {
                        console.log('my profile data', response.data);
                    })
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