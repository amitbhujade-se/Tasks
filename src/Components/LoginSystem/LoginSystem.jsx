import React, { useState } from 'react';
import "./LoginSytem.css"

const LoginSystem = () => {

    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const loginSubmit = (e) => {
        e.preventDefault();

        if(username === ""){
            setError("Username is required");
            return;
        }

        if(password === ""){
            setError("Password is required");
            return;
        }

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        setError("");
        return setIsLogin(true);
    }

    const handleLogout = () => {
        setIsLogin(false);
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        setUsername('');
        setPassword('');
    };


    return (
        <div className='login-container' style={{display: 'flex', flexDirection: "column", margin: "20px", height: "50vh"}}>
            <h1>Task no. 4</h1>
            {!isLogin ? <form onSubmit={loginSubmit} className='loginform'>
                <h2 style={{color: "darkblue"}}>Login form</h2>
                <label htmlFor="username">Username:</label>
                <input type="text" name='username' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" name='pass' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type='submit'>Login</button>
            </form>
            :

            <div className='logout'>
                <p>Welcome, {username} </p>
                <button onClick={handleLogout}>Logout</button>
            </div>
            }
        </div>
    )
}

export default LoginSystem;
