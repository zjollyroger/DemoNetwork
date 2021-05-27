import React from "react";
import i from './Users.module.css'

const users =  [
        {id: '1', name: 'John', status: 'irock', location: {id: 0, city: 'Minsk', country: 'Belarus'}, followed: true, avaUrl: '',},
        {id: '2', name: 'Ivan', status: 'watch tv', location: {id: 0, city: 'Moscow', country: 'Russia'} , followed: true,},
        {id: '3', name: 'Jogahn Gunz', status: 'playing', location: {id: 0, city: 'Berlin', country: 'Germany'}, followed: false,},
        {id: '4', name: 'Freedrech', status: 'listen music', location: {id: 0, city: 'Naked City', country: 'Austria'} , followed: false,},
    ];



const Users = (props) => {
console.log(props.users);


    if (props.users.length === 0) {
    props.setUsers(users);
}

    return (
        <div>
            {props.users.map((user, key) => {

                return (

                    <div key={key} className={i.user_item}>

                        <div className={i.left}>
                            <img className={i.ava}
                                src="https://www.film.ru/sites/default/files/filefield_paths/face-off-poster-with-john-travolta-and-nicolas-cage.jpg"
                                 alt="faceoff"/>


                            {(user.followed)
                                ?  <button className={i.button} onClick={() => props.unfollowOn(user.id)}>Un Follow</button>

                                : <button className={i.button} onClick={() => props.followOn(user.id)}>Follow me</button>
                            }
                        </div>


                        <div className={i.right}>
                            <div className={i.name}>
                                <div>{user.name}</div>
                                <div className={i.status}>{user.status}</div>
                            </div>
                            <div className={i.loc}>
                                <div>{user.location.city}</div>
                                <div>{user.location.country}</div>
                            </div>

                        </div>


                    </div>


                )
            })}
        <div></div>
        </div>
    )

}

export default Users;