import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import Author from "./Author/Author";
import {sendMessageActionCreator, updateMessengerTextActionCreator} from "../../redux/state";


const Dialogs = (props) => {
    /*let messageInputRead = React.createRef();*/
    let addMesage = () => {
        props.dispatch( sendMessageActionCreator() );
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch( updateMessengerTextActionCreator(text) );
    }


    /*Loop for every message that is sent to the UI*/
    let msgLoop = props.state.messagesData.map( m => <Message message={m.message} />
    );
    /*Loop for every dialog author*/
    let authorLoop = props.state.dialogsData.map(d => <Author name={d.name} id={d.id} /> );

    return (
        <div className={style.dialog}>
            <div className={style.dialog__author+' '+style.author}>
                {authorLoop}
            </div>
            <div className={style.dialog__message}>
                { msgLoop }
            </div>
            <textarea
                name="" id="" cols="30" rows="10"
                className={style.dialog__input}
                onChange={onMessageChange}
                value={props.state.messagesInput}
                /*ref={messageInputRead}*/
            />
            <button
                className={style.dialog__button}
                onClick={addMesage}
            >Send</button>
        </div>
    );
}
export default Dialogs;