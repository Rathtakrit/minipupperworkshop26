import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you may want to add styles for the header

const Header = () => {
    return (
        <header>
            <h1>Landing Page Title</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/registration">Registration</Link></li>
                    <li><Link to="/program">Program</Link></li>
                    <li><Link to="/directions">Directions</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;