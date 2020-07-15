import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../Commmon/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    let object = props.profile.contacts;
    let webSites = Object.keys(object).map((item, index) => {
        if (object[item] != null && object[item].startsWith("http")) {
            return <a className={style.profileInfo__link} href={object[item]} target="_blank">{item}</a>;
        }
        return <div>{object[item]}</div>;
    })

    return (
        <div className={style.profileInfo}>
            <img
                className={style.profileInfo__img}
                src={props.profile.photos.large}
                alt=""/>
            <div className={style.profileInfo__info}>
                <div className={`${style.profileInfo__about} ${style.profileInfo__group}`}>
                    <div className={`${style.profileInfo__aboutCaption} ${style.profileInfo__captions}`}>About me:</div>
                    <span className={style.profileInfo__aboutContent}>{props.profile.aboutMe}</span>
                </div>
                <div className={`${style.profileInfo__contacts} ${style.profileInfo__group}`}>
                    <ul className={style.profileInfo__contacts}>
                        <li className={style.profileInfo__contactsItem}>
                            <div className={style.profileInfo__captions}>Contacts</div>
                            <div>{webSites}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;