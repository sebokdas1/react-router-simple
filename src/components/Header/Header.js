import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
// import { CustomLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/posts">Posts</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/users">Users</CustomLink>
        </nav>
    );
};

export default Header;