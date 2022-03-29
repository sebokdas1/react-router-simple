import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    return (
        <div>
            <h3>hello buddy for {userId}</h3>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Website:{user.website}</p>
            <p>Address: {user.address?.city}</p>
        </div>
    );
};

export default UserDetail;