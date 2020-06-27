import React from "react";
import stl from './Header.module.css';

const Header = () => {
    return (
        <header className={stl.header}>
            <img src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png" alt=""/>
        </header>
    );
}
export default Header;