import React from 'react';
import logo from './logo.png';
import './header.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="header-container">
            <Link to="/">
                <div className="logo">
                    <img className="header-logo" src={logo} alt="Логотип приложения" />
                    <h1>WellSpeak</h1>
                </div>
            </Link>
            <nav className="header-nav">
                <ul>
                    <li><Link to='/'>Main</Link></li>
                    <li><Link to='/motion'>Card Game</Link></li>
                    <li><Link to='*'>Office</Link></li>
                </ul>
            </nav>
            <button className="logout-button">Log out</button>
        </header>
    );
};

export default Header;