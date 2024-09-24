import React from 'react';

const Dashboard = ({ user }) => {
    return (
        <div style={{borderBottom: "2px solid black"}}>
            <h1>Task no. 1</h1>
            <h2>Dashboard</h2>
            <p>Welcome, {user.name}!</p>
            <p>Your role: {user.role}</p>
        </div>
    );
};

export default Dashboard;