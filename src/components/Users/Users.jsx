import React from "react";
import style from "./Users.module.css"
import userPhoto from "./../../Assets/Images/user_default_avatar.jpg"
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={style.users}>
            <div>
                {pages.map(p => {
                    return (
                        <span
                            className={`${props.currentPage === p && style.selectedPage} ${style.everyPage} `}
                            onClick={(e) => {
                                props.onPageChanged(p);
                            }}
                        >{p}
                            </span>
                    )
                })}
            </div>
            {
                props.users.map(u =>
                    <div className={style.users__item} key={u.id}>
                        <div className={style.users__imgBlock}>
                            <NavLink to={"/profile/" + u.id}>
                                <img className={style.users__img}
                                     src={u.photos.small != null ? u.photos.small : userPhoto}
                                     alt=""
                                />
                            </NavLink>

                            {u.followed ?
                                <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                        usersAPI.unfollow(u.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        })

                                }}>Unfollow</button>
                                : <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY" : "51d6c8f5-f567-48a8-83ba-a1604cf8e4ad"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        })

                                }}>Follow</button>
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