const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSENGER_TEXT = 'UPDATE-MESSENGER-TEXT';

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

    // addPost() {
    //     let postArrLength = this._state.profilePage.postsData.length + 1;
    //     let newPost = {
    //         "id": postArrLength,
    //         "message": this._state.profilePage.newPostText,
    //         "likesCount": 0
    //     };
    //     this._state.profilePage.postsData.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callsubscriber(this._state);
    // },
    // updatePostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callsubscriber(this._state);
    // },
    // sendMessage() {
    //     let postArrLength = this._state.dialogsPage.messagesData.length + 1;
    //     let newMessage = {
    //         "id": postArrLength,
    //         "message": this._state.dialogsPage.messagesInput
    //     }
    //     this._state.dialogsPage.messagesData.push(newMessage);
    //     this._state.dialogsPage.messagesInput = "";
    //     this._callsubscriber(this._state);
    // },
    // updateMessengerText(newText) {
    //     this._state.dialogsPage.messagesInput = newText;
    //     this._callsubscriber(this._state);
    // },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let postArrLength = this._state.profilePage.postsData.length + 1;
            let newPost = {
                "id": postArrLength,
                "message": this._state.profilePage.newPostText,
                "likesCount": 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callsubscriber(this._state);
        }
        else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callsubscriber(this._state);
        }
        else if (action.type === SEND_MESSAGE) {
            let postArrLength = this._state.dialogsPage.messagesData.length + 1;
            let newMessage = {
                "id": postArrLength,
                "message": this._state.dialogsPage.messagesInput
            }
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.messagesInput = "";
            this._callsubscriber(this._state);
        }
        else if (action.type === UPDATE_MESSENGER_TEXT) {
            this._state.dialogsPage.messagesInput = action.newText;
            this._callsubscriber(this._state);
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateMessengerTextActionCreator = (text) => ({type: UPDATE_MESSENGER_TEXT, newText: text})

export default store;
window.state = store;