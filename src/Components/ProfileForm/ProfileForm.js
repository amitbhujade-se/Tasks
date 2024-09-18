import React, { useState } from 'react'
import UserProfile from './UserProfile'
import "./ProfileForm.css"

const ProfileForm = () => {

    const [message, setMessage] = useState("Message show here");
    const [userData, setUserData] = useState({ username: "Amit", email: "amit@gmail.com" });
    const [name, setName] = useState(userData.username); 
    const [email, setEmail] = useState(userData.email); 

    const updateUserMessage = () => {
        const message = "Profile updated successfully";
        setMessage(message);
    }

    const hadleSubmit = (e) => {
    e.preventDefault();
    setUserData({username: name, email: email});
    updateUserMessage();
    }

    return (
        <div className='container'>
            <h1>Task date : 14-09-2024</h1>
            <UserProfile user={userData} message={message} />
            <form className='userform' onSubmit={hadleSubmit}>
                <label htmlFor="name">Name : </label>
                <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="email" >Email : </label>
                <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <button className='profile-button' type='submit'>Update</button>
            </form>
        </div>
    )
}

export default ProfileForm;
