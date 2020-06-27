import React from "react";
import './Sidebar.css';

const Sidebar = () => {
    return (
        <nav id="nav">
            <ul>
                <li>
                    <a href="/Profile">Profiles</a>
                </li>
                <li>
                    <a href="/Dialogs">Messages</a>
                </li>
                <li>
                    <a href="">News</a>
                </li>
                <li>
                    <a href="">Music</a>
                </li>
            </ul>
            <div className="settings">
                <a href="">Settings</a>
            </div>
        </nav>
    );
}
export default Sidebar;