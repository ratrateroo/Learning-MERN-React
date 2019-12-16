import React from 'react';

import UsersList from '../components/UsersList';
const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Mark',
            image: 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t1.0-9/77154497_3178984255451306_5797013648283009024_n.jpg?_nc_cat=100&_nc_eui2=AeEbOCkj4mN9RQtOfObqzmNLQb_m1it0iLQpnbiRdfHBFWbY8TPOYkql2_2KqVoRcvi-eKVX8PGc_F3EIJYdZTugrsI-TGRDznyDLT3D8OP0aQ&_nc_ohc=nQP41bHsl34AQmqVXD3PTFVRhudDEcHLDYeIQ3d98Rq7RxCbuuGPzg6dQ&_nc_ht=scontent.fmnl4-4.fna&oh=6116a9f352c794e0cbe9b934b00afc0c&oe=5E74D275',
            places: 3
        },
        {
            id: 'u2',
            name: 'Leo',
            image: 'https://scontent.fmnl4-1.fna.fbcdn.net/v/t31.0-8/p720x720/414890_453414764674949_848983668_o.jpg?_nc_cat=104&_nc_eui2=AeFZgrnCD0yERe6aYZvPwNsZo32aDT6RGIDn5IaH_LdLQoiVdKA1PDO9WYQ67eIMyurc6VvxPw4h_meq2g-ULjG_MPIqV9ZK_ajPc6UFVM84vA&_nc_ohc=BIWkO0JrqP8AQnowYrI5mdXtRBdlikpREHJSCzTWA2uWn9qvOgKZ9_MxA&_nc_ht=scontent.fmnl4-1.fna&oh=3f9974eb16de0732757ca3c13c4575ab&oe=5E81A26B',
            places: 1
        }
    ];
    return <UsersList items={USERS} />;
};

export default Users;