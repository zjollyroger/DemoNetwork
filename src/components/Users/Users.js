import React from "react";
import i from './Users.module.css'
import userNoPhoto from "../../assets/images/faceoff.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    let pages = Math.ceil(props.totalUsersCount / props.pageSize);

    let pagesArr = [];
    for (let i = 1; i <= pages; i++) {
        pagesArr = [...pagesArr, i];
    }

    return (
        <div>

            <h4 className={i.pages}>TOTAL USERS: {props.totalUsersCount}</h4>

            <div className={i.pages}>
                {pagesArr.map((page, index) =>
                    <span key={index} onClick={() => props.onPageChange(page)}
                          className={(page === props.selectedPage) && i.selectedPage}>{page}</span>
                )}

            </div>
            {props.users.map((user, key) => {

                return (

                    <div key={key} className={i.user_item}>

                        <div className={i.left}>
                            <NavLink to={'/profile/' + user.id}>
                                <img className={i.ava}
                                     src={(user.photos.small) ? user.photos.small : userNoPhoto}
                                     alt="faceoff"/>
                            </NavLink>

                            {(user.followed)
                                ?


                                <button className={i.button} onClick={() =>
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {'API-KEY': '537bb101-34d5-4e34-81ad-544337f8e7e9'}
                                        }).then(response => {
                                        console.log(response.data, 'api here');
                                        if (response.data.resultCode === 0) {
                                            props.unfollowOn(user.id)
                                        }
                                    })}
                                >UnFollow</button>


                                :

                                <button className={i.button} onClick={() =>
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                                        {
                                            withCredentials: true,
                                            headers: {'API-KEY': '537bb101-34d5-4e34-81ad-544337f8e7e9'}
                                        }).then(response => {
                                        console.log(response.data, 'api here');
                                        if (response.data.resultCode === 0) {
                                            props.followOn(user.id)
                                        }
                                    })}
                                >Follow me </button>

                            }


                        </div>


                        <div className={i.right}>
                            <div className={i.name}>
                                <div><i>{user.name}</i></div>
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

export default Users;