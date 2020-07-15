import React from "react";
import style from "./Users.module.css"
import userPhoto from "./../../Assets/Images/user_default_avatar.jpg"
import {NavLink} from "react-router-dom";

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
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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