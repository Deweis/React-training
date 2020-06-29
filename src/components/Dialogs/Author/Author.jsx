import style from "./Author.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const Author = (props) => {
    return (
        <div className={style.author__item}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default Author;