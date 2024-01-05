import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer-container">
            <nav>
                <ul>
                    <li><Link to='foruse'>For use</Link></li>
                    <li><Link to='connect'>Connect with us</Link></li>
                    <li><Link to='supprt'>Support</Link></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
