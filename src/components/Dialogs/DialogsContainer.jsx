import React from "react";
import {sendMessageActionCreator, updateMessengerTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {
    let state = props.store.dialogsPage;
    /*let messageInputRead = React.createRef();*/
    let addMesage = () => {
        props.dispatch( sendMessageActionCreator() );
    }
    let onMessageChange = (text) => {
        props.dispatch( updateMessengerTextActionCreator(text) );
    }

    return (
       <Dialogs
            addMesage={addMesage}
            onMessageChange={onMessageChange}
            messagesInput={state.messagesInput}
            dialogsData={state.dialogsData}
            messagesData={state.messagesData}
       />
    );
}
export default DialogsContainer;