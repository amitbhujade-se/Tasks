import React from 'react';

const UserList = ({ data }) => {
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {data && data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
