import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/logo.svg';

const Logo = () => {
    return (
        <Link id='ndbLogo' to='/' className='landing-logo'>
            <img src={ logo } alt='Logo' />
        </Link>
    );
};

export default Logo;