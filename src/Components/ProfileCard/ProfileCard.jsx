import React, { useState } from 'react'
import "./ProfileCard.css"
const ProfileCard = () => {

    const userProfile = ({ name: "Amit", age: 25, location: "Nagpur", bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis accusantium, incidunt veritatis id ad voluptatibus praesentium illum asperiores? Minima voluptatem voluptatum pariatur accusamus ab laborum aperiam? Delectus eius quia officia." });

    const [data, setData] = useState(false);
    const [button, setButton] = useState("Show more");

    const toggleButton = (e) => {
        setData(!data);
        setButton(data ? "Show more" : "Show less");
    };

    return (
        <div className='Profile-container' style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h1>Task no. 1</h1>
            <ul className='my-profile'>
                <li>Name: {userProfile.name}</li>
                <li>Age: {userProfile.age}</li>
                <li>Location: {userProfile.location}</li>
                <li className='data' style={{
                    maxHeight: data ? "none" : "100px",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease"
                }}>Bio: {userProfile.bio}</li>
                <button className='bio-button' type='submit' onClick={toggleButton}>{button}</button>
            </ul>
            
        </div>
    );
};

export default ProfileCard;
