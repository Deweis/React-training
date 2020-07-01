import React from "react";
import style from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
    let friendsLoop = props.state.friends.map(value => <Friends id={value.id} friendName={value.friendName} friendPicture={value.friendPicture}  /> )
    return (
        <div className={style.sidebar}>
            <nav className={style.nav}>
                <ul>
                    <li>
                        <NavLink to="/Profile" activeClassName={style.active}>Profiles</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Dialogs" activeClassName={style.active}>Messages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/News" activeClassName={style.active}>News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Music" activeClassName={style.active}>Music</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Settings" activeClassName={style.active}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={style.sidebar__friends}>
                <h3 className={style.sidebar__title}>Friends</h3>
                <div className={style.sidebar__friendsWrap}>
                    {friendsLoop}
                </div>
            </div>
        </div>
    );
}
export default Sidebar;