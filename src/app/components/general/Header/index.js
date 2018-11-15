import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu';

const Header = () => {
    return (
        <header className='clearfix'>
            <Link to='/' className='logo'>LOGO</Link>
            <Menu />
        </header>
    );
};

export default Header;