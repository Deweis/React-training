import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    return (
            <div className={style.post}>
                <img className={style.post__img} src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg" alt="Img"/>
                <div>
                    <h4>{props.message+' '+props.likesCount}</h4>
                    <div>
                        <div className={`birth ${style.post__birth}`}>Date of Birth: 2 january</div>
                        <div className={style.post__city}>City: Minsk</div>
                        <div className={style.post__education}>Education: BSU 11</div>
                        <div className={style.post__website}>https://it-kamasutra.com</div>
                    </div>
                </div>
            </div>

    );
}
export default Post;