import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import {Route} from "react-router-dom";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
            <div className="mainWrapper">
                <Header/>
                <SidebarContainer store={props.store}
                                  dispatch={props.dispatch}/>
                <div className="contentWrapper">
                    <Route path="/dialogs/" render={ () =>
                        <DialogsContainer
                            store={props.store}
                            dispatch={props.dispatch}
                        />} />
                    <Route path="/profile/" render={ () =>
                        <Profile
                            store={props.store}
                            dispatch={props.dispatch}
                        />} />
                </div>
            </div>
    );
}
export default App;