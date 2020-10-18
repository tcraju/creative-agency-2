import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'

const Header = () => {
    return (
        <div className= 'container header-area'>
            <Navbar></Navbar>        
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;