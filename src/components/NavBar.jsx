import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import wave from '../assets/img/wave.png';
import '../assets/scss/NavBar.scss';

function NavBar() {

  return (
    <>
      <img src={wave} className="wave-bg" alt="background" />
      <header className="header">
        <img src={logo} alt="Company logo" />
        <nav>
          <ul className='header__nav'>
            <li><Link to='/' className='header__link-active'>Home</Link></li>
            <li><Link to='/about' className='header__link'>About us</Link></li>
            <li><Link to='/service' className='header__link'>Service</Link></li>
            <li className="has-dropdown">
              <span className="header__link">Page</span>
              <ul className="dropdown">
                <li><Link to='/our-team' className="dropdown__link">Our Team</Link></li>
                <li><Link to='/pricing-plan' className="dropdown__link">Pricing Plan</Link></li>
                <li><Link to='/privacy-policy' className="dropdown__link">Privacy Policy</Link></li>
                <li><Link to='/tems-and-conditions' className="dropdown__link">Tems & Conditions</Link></li>
                <li><Link to='/faq' className="dropdown__link">FAQ</Link></li>
              </ul>
            </li>
            <li><Link to='/blog' className='header__link'>Blog</Link></li>
          </ul>
        </nav>

        <Link to='/contact-us' className='header__button'>Contact us</Link>
      </header>
    </>
  );
}

export default NavBar;