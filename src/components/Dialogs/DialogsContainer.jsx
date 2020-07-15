import React from "react";
import {sendMessageActionCreator, updateMessengerTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



/*const DialogsContainer = (props) => {
    let state = props.store.dialogsPage;
    /!*let messageInputRead = React.createRef();*!/
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
}*/


const mapStateToProps = (state) => {
    return {
        messagesInput : state.dialogsPage.messagesInput,
        dialogsData : state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage : () => {
            dispatch( sendMessageActionCreator() );
        },
        onMessageChange : (text) => {
            dispatch( updateMessengerTextActionCreator(text) );
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;