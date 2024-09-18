import React from 'react'

const UserProfile = ({ user, message }) => {
    return (
        <div>
            <h1>{message}</h1>
            <h2><p>Name: {user.username}</p>
                <p>Email: {user.email}</p></h2>
        </div>
    )
}

export default UserProfile
