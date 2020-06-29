import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import Author from "./Author/Author";


const Dialogs = (props) => {

    /*Loop for every message that is sent to the UI*/
    let msgLoop = props.state.messagesData.map( m => <Message message={m.message} />
    );
    return (
        <div className={style.dialog}>
            <div className={style.dialog__author+' '+style.author}>
                {props.state.dialogsData.map(dialog => {
                return <Author name={dialog.name} id={dialog.id} />
            })}
            </div>
            <div className={style.dialog__message}>
                { msgLoop }
            </div>
        </div>
    );
}
export default Dialogs;