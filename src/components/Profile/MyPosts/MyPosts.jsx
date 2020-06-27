import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = () => {
    return (
            <div className={s.content__post}>
                <Post message = "hello" />
                <Post message = "GoodBye" />

                <form action="" id="">
                    <h3 className={s.myPost}>My posts</h3>
                    <textarea name="" id="" cols="30" rows="10">your news...</textarea>
                    <button>Send</button>
                </form>


            </div>
    );
}
export default MyPosts;