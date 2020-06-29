import React from "react";
import style from './Sidebar.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <nav id="nav">
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
    );
}
export default Sidebar;