import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import Author from "./Author/Author";


const Dialogs = (props) => {
    let messageInputRead = React.createRef();
    let addMesage = () => {
        props.sendMessage();
    }
    let onMessageChange = () => {
        let text = messageInputRead.current.value;
        props.updateMessengerText(text);
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
                ref={messageInputRead}
            />
            <button
                className={style.dialog__button}
                onClick={addMesage}
            >Send</button>
        </div>
    );
}
export default Dialogs;