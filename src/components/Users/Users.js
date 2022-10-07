import React from "react";
import i from './Users.module.css'
import userNoPhoto from "../../assets/images/faceoff.jpg";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {

    let pages = Math.ceil(props.totalUsersCount / props.pageSize);

    let pagesArr = [];
    for (let i = 1; i <= pages; i++) {
        pagesArr = [...pagesArr, i];
    }

    const isDisable = props.isDisable;


    return (
        <div>
            <h4 className={i.pages}>TOTAL USERS: {props.totalUsersCount}</h4>

{/*
            <div className={i.pages}>
                {pagesArr.map((page, index) =>
                    <span key={index} onClick={() => props.onPageChange(page)}
                          className={(page === props.selectedPage) && i.selectedPage}>{page}</span>
                )}

            </div>
*/}

            <hr/>

            {Paginator(props.totalUsersCount, props.pageSize, props.selectedPage, props.onPageChange)}

            <hr/>


            {props.users.map((user, key) => {

                return (

                    <div key={key} className={i.user_item}>

                        <div className={i.left}>
                            <NavLink to={'/profile/' + user.id}>
                                <img className={i.ava}
                                     src={(user.photos.small) ? user.photos.small : userNoPhoto}
                                     alt="faceoff"/>
                            </NavLink>

                            {user.followed
                                ?
                                <button disabled={isDisable.find(id=>id===user.id)}
                                        className={'i.button'}
                                        onClick={ ()=> props.unfollowThunkCreator(user.id) }
                                >UnFollow</button>

                                :
                                <button disabled={isDisable.find(id => id===user.id)}
                                    className={'i.button'}
                                    onClick={() => {props.followThunkCreator(user.id)}
                                }
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