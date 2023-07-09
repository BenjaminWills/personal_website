import React from 'react';
import './Navbar.css';
import logo from './IMG_1866.jpeg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-header">
        <img className='photo' src={logo} alt="Logo" />
        Ben Wills
    </h1>
    </nav>
  );
};

export default Navbar;
