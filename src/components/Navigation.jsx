import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/registration">Registration</Link></li>
                <li><Link to="/program">Program</Link></li>
                <li><Link to="/directions">Directions</Link></li>
                <li><Link to="/resources">Resources</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;