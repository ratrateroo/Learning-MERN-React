import React from 'react';

import UsersList from '../components/UsersList';
const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Mark',
            image: 'https://images.pexels.com/photos/6322/cold-snow-nature-winter.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            places: 3
        },
        {
            id: 'u2',
            name: 'Leo',
            image: 'https://images.pexels.com/photos/1708601/pexels-photo-1708601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            places: 1
        }
    ];
    return <UsersList items={USERS} />;
};

export default Users;