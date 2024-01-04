import React from 'react';
import logo from './logo.png';
import './header.css';


function Header() {
    const handleClick = (event, id) => {
        event.preventDefault();
        const elem = document.querySelector(id);

        if (elem) {
            window.scroll({
                top: elem.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className="header-container">
            <div className="logo">
                <img className="header-logo" src={logo} alt="Логотип приложения" />
                <h1>WellSpeak</h1>
            </div>

            <nav className="header-nav">
                <ul>
                    <li><a href="#!" onClick={(e) => handleClick(e, '#main')}>Main</a></li>
                    <li><a href="#motion-card" onClick={(e) => handleClick(e, '#motion-card')}>Card Game</a></li>
                    <li><a href="#office" onClick={(e) => handleClick(e, '#office')}>Office</a></li>
                </ul>
            </nav>
            <button className="logout-button">Log out</button>
        </header>
    );
};

export default Header;