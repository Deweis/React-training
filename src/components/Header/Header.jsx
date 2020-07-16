import React from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from './../../Assets/Images/user_default_avatar.jpg';

const Header = (props) => {
    return (
        <header className={style.header}>
            <img className={style.logo} src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png" alt=""/>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>
                        <div className={style.login}>{props.login}</div>
                        {!props.photo ? <img className={style.image} src={userPhoto} alt=""/> : <img className={style.image} src={props.photo} alt=""/>}
                    </div>
                :<NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}
export default Header;