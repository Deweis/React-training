import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        "dialogsPage": {
            "dialogsData": [
                {"id": 1, "name": "Michael"},
                {"id": 2, "name": "Frederiko"},
                {"id": 3, "name": "Danielle"},
            ],
            "messagesData": [
                {"id": 1, "message": "Hello"},
                {"id": 2, "message": "Bongiorno"},
                {"id": 3, "message": "Bon jour"}
            ],
            "messagesInput": ""
        },
        "profilePage": {
            "postsData": [
                {"id": 1, "message": "Hello, how are you?", "likesCount": 12},
                {"id": 2, "message": "Bongiorno, come stai?", "likesCount": 18},
                {"id": 3, "message": "Bon jour, comment ca va?", "likesCount": 25},
            ],
            "newPostText": "Add new post..."
        },
        "sidebarPage": {
            "friends": [
                {
                    "id": 1,
                    "friendName": "Michael",
                    "friendPicture": "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                },
                {
                    "id": 2,
                    "friendName": "Frederiko",
                    "friendPicture": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                },
                {
                    "id": 3,
                    "friendName": "Danielle",
                    "friendPicture": "https://image.shutterstock.com/image-photo/goodlooking-french-girl-ginger-hair-260nw-1259506342.jpg"
                }
            ]
        }
    },
    _callsubscriber() {
        console.log("State was changed!");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callsubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        this._callsubscriber(this._state);
    }
}

export default store;
window.state = store;