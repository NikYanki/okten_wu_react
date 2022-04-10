import {useState, useEffect} from 'react';

import {UsersServise} from '../../servis';
import {User} from '../';

export const Users = () => {
    const [users, setUsers]=useState([])
    useEffect(()=>{
        UsersServise.getAllUsers().then(users => setUsers(users));
        },[]);

    return (
        <div>
        {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};
