import React from "react";
import style from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={style.friend}>
            <img className={style.friend__img} src={`${props.friendPicture}`} alt=""/>
            <div className={style.friend__name}>{props.friendName}</div>
        </div>
    );
}
export default Friends;