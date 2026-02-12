import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 mt-20 py-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">MiniPupper Workshop</h3>
                        <p className="text-sm">Building the future with robotics education.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="hover:text-white transition">Home</a></li>
                            <li><a href="/program" className="hover:text-white transition">Program</a></li>
                            <li><a href="/registration" className="hover:text-white transition">Register</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                            <li><a href="/terms-of-service" className="hover:text-white transition">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8">
                    <p className="text-center text-sm">&copy; {new Date().getFullYear()} MiniPupper Workshop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;