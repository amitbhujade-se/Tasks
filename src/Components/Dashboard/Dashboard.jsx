import React, { useState } from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import TodoApp from '../TodoApp/TodoApp';
import "./Dashboard.css"

const Dashboard = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    }


    return (<div className={`main-dashboard ${darkMode ? 'dark-mode' : 'light-mode'}`}> <h1 style={{textAlign: "center"}}>Task no. 6</h1>
        <div className={`dashboard-container `}>
            <h1>Dashboard</h1>
            <button onClick={toggleTheme}>
                Switch to {darkMode ? 'Light' : 'Dark'} Mode
            </button>
            <ProfileCard />
            <TodoApp />
        </div>
    </div>
    )
}

export default Dashboard;
