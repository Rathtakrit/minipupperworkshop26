import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto max-w-7xl flex items-center justify-between h-20 px-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group min-w-0">
                    <div className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300 flex-shrink-0">
                        🤖
                    </div>
                    <span className="text-lg md:text-2xl font-bold group-hover:text-blue-100 transition-colors duration-300 truncate">
                        MiniPupper Workshop
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex gap-1">
                        {[
                            { to: "/", label: "Home" },
                            { to: "/program", label: "Program" },
                            { to: "/directions", label: "Directions" },
                            { to: "/resources", label: "Resources" },
                        ].map((item) => (
                            <li key={item.to}>
                                <Link 
                                    to={item.to} 
                                    className="px-4 py-2 hover:text-blue-200 transition-all duration-300 font-medium relative group"
                                >
                                    {item.label}
                                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-blue-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link 
                                to="/registration" 
                                className="ml-2 px-6 py-2 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                                Register
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 hover:bg-blue-500 rounded-lg transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <nav className="md:hidden bg-blue-700 border-t border-blue-500">
                    <ul className="flex flex-col p-4 gap-2">
                        <li><Link to="/" className="block px-4 py-2 hover:bg-blue-600 rounded-lg transition-colors font-medium">Home</Link></li>
                        <li><Link to="/program" className="block px-4 py-2 hover:bg-blue-600 rounded-lg transition-colors font-medium">Program</Link></li>
                        <li><Link to="/directions" className="block px-4 py-2 hover:bg-blue-600 rounded-lg transition-colors font-medium">Directions</Link></li>
                        <li><Link to="/resources" className="block px-4 py-2 hover:bg-blue-600 rounded-lg transition-colors font-medium">Resources</Link></li>
                        <li><Link to="/registration" className="block px-4 py-2 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors text-center">Register</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;