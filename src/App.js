import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
  return (
    <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            <Profile />
        </div>
        <Dialogs />
    </div>
  );
}

export default App;