import React from 'react';

export const User = ({user}) => {
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <hr/>
        </div>
    );
};
