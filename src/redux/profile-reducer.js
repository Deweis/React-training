const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState ={
    "postsData": [
        {"id": 1, "message": "Hello, how are you?", "likesCount": 12},
        {"id": 2, "message": "Bongiorno, come stai?", "likesCount": 18},
        {"id": 3, "message": "Bon jour, comment ca va?", "likesCount": 25},
    ],
    "newPostText": "Add new post..."
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let postArrLength = state.postsData.length + 1;
            let newPost = {
                "id": postArrLength,
                "message": state.newPostText,
                "likesCount": 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;

    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text})
export default profileReducer;