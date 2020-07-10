import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.profilePage;
    /*Button function, adding new post from State file*/
    let addPost = () => {
        props.dispatch( addPostActionCreator() );
    }
    let onPostChange = (text) => {
        props.dispatch( updateNewPostTextActionCreator(text));
    }
    return (
        <MyPosts
            onPostChange={onPostChange}
            addPost={addPost}
            posts={state.postsData}
            newPostText={state.newPostText}
        />
    );
}
export default MyPostsContainer;