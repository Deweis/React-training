import React from "react";
import style from "./Users.module.css"
import * as axios from "axios";
import userPhoto from "./../../Assets/Images/user_default_avatar.jpg"

const Users = (props) => {
    if (props.users.length === 0 ) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
       })
    }

    return (
        <div className={style.users}>
            {
                props.users.map(u =>
                    <div className={style.users__item} key={u.id}>
                        <div className={style.users__imgBlock}>
                            <img className={style.users__img}
                                 src={u.photos.small != null ? u.photos.small: userPhoto}
                                 alt=""
                            />
                            {u.followed ?
                                <button onClick={ () => {props.unfollow(u.id)}} >Unfollow</button>
                                :<button onClick={ () => {props.follow(u.id)}} >Follow</button>
                            }
                        </div>
                        <div className={style.users__textWrap}>
                            <div className={style.users__nameBlock}>
                                <h3 className={style.users__name}>{u.name}</h3>
                                <div className={style.users__status}>{u.status}</div>
                            </div>
                            <div className={style.users__locationBlock}>
                                <div className={style.users__country}>{"u.location.country"}</div>
                                <div className={style.users__city}>{"u.location.city"}</div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    )

}

export default Users;