import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import {Route} from "react-router-dom";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = () => {
    return (
            <div className="mainWrapper">
                <Header/>
                <SidebarContainer />
                <div className="contentWrapper">
                    <Route path="/dialogs/" render={ () =>
                        <DialogsContainer />
                    }/>
                    <Route path="/profile/:userId?" render={ () =>
                        <ProfileContainer />
                    }/>
                    <Route path="/users/" render={ () =>
                        <UsersContainer />
                    }/>
                </div>
            </div>
    );
}
export default App;