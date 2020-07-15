import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*const MyPostsContainer = (props) => {
    let state = props.store.profilePage;
    /!*Button function, adding new post from State file*!/
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
}*/
let mapStateToProps = (state) => {
    return {
        posts : state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost : () => {
            dispatch( addPostActionCreator() );
        },
        onPostChange : (text) => {
            dispatch( updateNewPostTextActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);
export default MyPostsContainer;