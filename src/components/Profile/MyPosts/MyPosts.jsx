import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";

const MyPosts = (props) => {
    /*Add posts block*/
    let newPostElement = React.createRef();
    /*Button function, adding new post from State file*/
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePostText(text);
    }

    /*Variable with loop on data about every post that was sent from the server*/
    let postsLoop = props.postsData.map(elem => <Post message={elem.message} likesCount={elem.likesCount} />)

    return (
            <div className={style.postsWrap}>
                { postsLoop }
                <div className={style.postsWrap__inputArea}>
                    <h3 className={style.postsWrap__title}>My posts</h3>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                        ref={newPostElement}
                        className={style.postsWrap__textarea}
                        name="" id="" cols="30" rows="10"
                    />
                    <button className={style.postsWrap__button} type="button" onClick={ addPost }>Send</button>
                </div>
            </div>
    );
}
export default MyPosts;