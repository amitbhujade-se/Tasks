import React, { useEffect, useState } from 'react'
import "./CountdownTimer.css"
const CountdownTImer = () => {
    const [time, setTime] = useState(10); 
    const [isActive, setIsActive] = useState(false); 

    // Function to start the timer
    const startTimer = () => {
        setIsActive(true);
    };

    // useEffect to handle the countdown logic
    useEffect(() => {
        let timer;
        if (isActive && time > 0) {
            timer = setTimeout(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setIsActive(false); 
        }

        // Clean up the timer
        return () => clearTimeout(timer);
    }, [isActive, time]);

    return (
        <div className='countdown-container'>
            <h2>Task 02</h2>
            <h3>Countdown Timer</h3>
            <p>{time > 0 ? `${time} seconds remaining` : "Time’s up!"}</p>
            <button onClick={startTimer} disabled={isActive}>
                Start Timer
            </button>
        </div>
    );
};

export default CountdownTImer;
