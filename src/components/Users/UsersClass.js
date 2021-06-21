import React from "react";
import i from './Users.module.css'
import * as axios from "axios";
import userNoPhoto from "../../assets/images/faceoff.jpg";

const users = [
    {
        id: '1',
        name: 'John',
        status: 'irock',
        location: {id: 0, city: 'Minsk', country: 'Belarus'},
        followed: true,
        avaUrl: '',
    },
    {id: '2', name: 'Ivan', status: 'watch tv', location: {id: 0, city: 'Moscow', country: 'Russia'}, followed: true,},
    {
        id: '3',
        name: 'Jogahn Gunz',
        status: 'playing',
        location: {id: 0, city: 'Berlin', country: 'Germany'},
        followed: false,
    },
    {
        id: '4',
        name: 'Freedrech',
        status: 'listen music',
        location: {id: 0, city: 'Naked City', country: 'Austria'},
        followed: false,
    },
];

class UsersClass extends React.Component {

    componentDidMount() {
        // alert('componentDidMount');
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                console.log(response.data.items, 'api here');
                this.props.setUsers(response.data.items);
            }
        );
    }

    render() {
        return (
            <div>

                {this.props.users.map((user, key) => {

                    return (

                        <div key={key} className={i.user_item}>

                            <div className={i.left}>
                                <img className={i.ava}
                                     src={(user.photos.small) ? user.photos.small : userNoPhoto}

                                     alt="faceoff"/>


                                {(user.followed)
                                    ? <button className={i.button} onClick={() => this.props.unfollowOn(user.id)}>Un
                                        Follow</button>

                                    :
                                    <button className={i.button} onClick={() => this.props.followOn(user.id)}>Follow
                                        me</button>
                                }
                            </div>


                            <div className={i.right}>
                                <div className={i.name}>
                                    <div>{user.name}</div>
                                    <div className={i.status}>{user.status}</div>
                                </div>
                                <div className={i.loc}>
                                    <div>{"user.location.city"}</div>
                                    <div>{"user.location.country"}</div>
                                </div>

                            </div>


                        </div>


                    )
                })}
            </div>
        );
    }
}



export default UsersClass;