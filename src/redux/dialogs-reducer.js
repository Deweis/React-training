const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSENGER_TEXT = 'UPDATE-MESSENGER-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let postArrLength = state.messagesData.length + 1;
            let newMessage = {
                "id": postArrLength,
                "message": state.messagesInput
            }
            state.messagesData.push(newMessage);
            state.messagesInput = "";
            return state;

        case UPDATE_MESSENGER_TEXT:
            state.messagesInput = action.newText;
            return state;

        default:
            return state;

    }

}
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateMessengerTextActionCreator = (text) => ({type: UPDATE_MESSENGER_TEXT, newText: text})

export default dialogsReducer;