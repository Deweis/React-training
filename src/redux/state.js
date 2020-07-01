let renderEntireTree = () => {
    console.log("State was changed!");
}
/*Data*/
let state = {
    "dialogsPage": {
        "dialogsData" : [
            {"id": 1, "name" : "Michael"},
            {"id": 2, "name" : "Frederiko"},
            {"id": 3, "name" : "Danielle"},
        ],
        "messagesData" : [
            {"id" : 1, "message" : "Hello"},
            {"id" : 2, "message" : "Bongiorno"},
            {"id" : 3, "message" : "Bon jour"}
        ],
        "messagesInput" : "Send message..."
    },
    "profilePage": {
        "postsData" : [
            {"id": 1, "message" : "Hello, how are you?", "likesCount": 12},
            {"id" : 2, "message" : "Bongiorno, come stai?", "likesCount": 18},
            {"id" : 3, "message" : "Bon jour, comment ca va?", "likesCount": 25},
        ],
        "newPostText" : "Add new post..."
    },
    "sidebarPage" : {
        "friends" : [
            {"id" : 1, "friendName": "Michael", "friendPicture" : "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},
            {"id" : 2, "friendName": "Frederiko", "friendPicture" : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},
            {"id" : 3, "friendName": "Danielle", "friendPicture" : "https://image.shutterstock.com/image-photo/goodlooking-french-girl-ginger-hair-260nw-1259506342.jpg"}
        ]
    }
}
/*Global variable for console in browser*/
window.state = state;

/*Add new post */
export const addPost = () => {
    let postArrLength = state.profilePage.postsData.length + 1;
    let newPost = {
        "id" : postArrLength,
        "message" : state.profilePage.newPostText,
        "likesCount" : 0
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}
export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}
/*Messenger sending messages*/
export const sendMessage = () => {
    let postArrLength = state.dialogsPage.messagesData.length + 1;
    let newMessage = {
        "id" :  postArrLength,
        "message" : state.dialogsPage.messagesInput
    }
    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.messagesInput = "";
    renderEntireTree(state);
}
export const updateMessengerText = (newText) => {
    state.dialogsPage.messagesInput = newText;
    renderEntireTree(state);
}
export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;