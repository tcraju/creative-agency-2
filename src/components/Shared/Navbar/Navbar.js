import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../../images/main-logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light px-0 mx-0" style={{lineHeight:'35px'}}>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <img style={{width:'150px'}} src={mainLogo} alt=""/>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-3" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/dashboard">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3 " to="/dashboard">Our Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3 " to="#">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#"> <button className='btn btn-dark'> Login</button></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;