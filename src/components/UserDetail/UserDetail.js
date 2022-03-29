import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const { userId } = useParams();
    return (
        <div>
            <h3>hello buddy for {userId}</h3>
        </div>
    );
};

export default UserDetail;