import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.content__img}>
                <img src="https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg" alt=""/>
            </div>
           <MyPosts />
        </div>
    );
}
export default Profile;