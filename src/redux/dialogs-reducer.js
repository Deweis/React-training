const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSENGER_TEXT = 'UPDATE-MESSENGER-TEXT';

let initialState =  {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let postArrLength = state.messagesData.length + 1;
            let newMessage = {
                "id": postArrLength,
                "message": state.messagesInput
            }
            return {
                ...state,
                messagesInput : '',
                messagesData : [...state.messagesData, newMessage]
            };

        case UPDATE_MESSENGER_TEXT:
            return {
                ...state,
                messagesInput : action.newText
            };
        default:
            return state;
    }

}
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateMessengerTextActionCreator = (text) => ({type: UPDATE_MESSENGER_TEXT, newText: text})

export default dialogsReducer;