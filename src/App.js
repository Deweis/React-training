import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter,Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="mainWrapper">
                <Header/>
                <Sidebar/>
                <div className="contentWrapper">
                    <Route path="/dialogs" render={ () => <Dialogs  state={props.state.dialogsPage} />} />
                    <Route path="/profile" render={ () => <Profile state={props.state.profilePage} />} />
                </div>
            </div>
        </BrowserRouter>
    )
        ;
}

export default App;