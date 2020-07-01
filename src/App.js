import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


const App = (props) => {
    return (
            <div className="mainWrapper">
                <Header/>
                <Sidebar state={props.state.sidebarPage} />
                <div className="contentWrapper">
                    <Route path="/dialogs/" render={ () =>
                        <Dialogs
                            state={props.state.dialogsPage}
                            sendMessage={props.sendMessage}
                            updateMessengerText={props.updateMessengerText}
                        />} />
                    <Route path="/profile/" render={ () =>
                        <Profile
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updatePostText={props.updatePostText}
                        />} />
                </div>
            </div>
    );
}
export default App;