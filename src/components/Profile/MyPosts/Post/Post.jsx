import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
            <div className={s.content__item}>
                <img src="" alt="Img"/>
                <div>
                    <h4>{props.message}</h4>
                    <div>
                        <div className={`birth ${s.item}`}>Date of Birth: 2 january</div>
                        <div className={s.city}>City: Minsk</div>
                        <div className={s.education}>Education: BSU 11</div>
                        <div className={s.website}>https://it-kamasutra.com</div>
                    </div>
                </div>
            </div>

    );
}
export default Post;