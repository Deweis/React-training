const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState ={
    profile:null,
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
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData,newPost]
            }

        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;

    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export default profileReducer;