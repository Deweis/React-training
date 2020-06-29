import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";

const MyPosts = (props) => {
    /*Variable with loop on data about every post that was sent from the server*/
    let postsLoop = props.postsData.map(elem => <Post message={elem.message} likesCount={elem.likesCount} />)

    return (
            <div className={style.postsWrap}>
                { postsLoop }
                <form action="" id="">
                    <h3 className={style.postsWrap__title}>My posts</h3>
                    <textarea className={style.postsWrap__textarea} name="" id="" cols="30" rows="10">your news...</textarea>
                    <button>Send</button>
                </form>


            </div>
    );
}
export default MyPosts;