import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto max-w-7xl flex items-center justify-between h-20 px-4">
                <h1 className="text-3xl font-bold">MiniPupper Workshop</h1>
                <nav className="hidden md:block">
                    <ul className="flex gap-8">
                        <li><Link to="/" className="hover:text-blue-200 transition-colors">Home</Link></li>
                        <li><Link to="/program" className="hover:text-blue-200 transition-colors">Program</Link></li>
                        <li><Link to="/directions" className="hover:text-blue-200 transition-colors">Directions</Link></li>
                        <li><Link to="/resources" className="hover:text-blue-200 transition-colors">Resources</Link></li>
                        <li><Link to="/registration" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Register</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;