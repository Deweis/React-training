import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, sendMessage, subscribe, updateMessengerText, updatePostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import state from "./redux/state";


let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost = {addPost}
                    sendMessage = {sendMessage}
                    updatePostText={updatePostText}
                    updateMessengerText={updateMessengerText}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(state);
subscribe(renderEntireTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
