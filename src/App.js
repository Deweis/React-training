import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
    return (
            <div className="mainWrapper">
                <HeaderContainer />
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