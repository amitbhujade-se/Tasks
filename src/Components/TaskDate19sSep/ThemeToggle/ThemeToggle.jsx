// ThemeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Import the ThemeContext
import './ThemeSwitcher.css'; // Include your styles for light and dark themes

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggle function

    return (
        <div className={`app-container ${theme}`}>
            <h1 style={{textAlign: "left"}}>Task no. 3</h1>
            <h3>Theme Switcher</h3>
            <p>The current theme is <strong>{theme}</strong>.</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemeToggle;
