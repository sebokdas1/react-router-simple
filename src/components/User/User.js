import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = ({ user }) => {
    const { name, username, id } = user;
    const navigate = useNavigate();
    const friendDetail = () => {
        const path = `/user/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h1>single user dataa</h1>
            <h3>name: {name}</h3>
            <Link to={'/user/' + id}>Click</Link>
            <button onClick={friendDetail}>{username}</button>
        </div>
    );
};

export default User;