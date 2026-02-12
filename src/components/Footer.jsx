import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 mt-20 py-12">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="mb-8">
                    <h3 className="text-white font-bold text-lg mb-6">Workshop Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <img src="/images/workshop-1.jpg" alt="Workshop moment 1" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <p className="text-sm text-gray-300 text-center">Workshop Experience</p>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <img src="/images/workshop-2.jpg" alt="Workshop moment 2" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <p className="text-sm text-gray-300 text-center">Mini Pupper Demo</p>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <img src="/images/workshop-3.jpg" alt="Workshop moment 3" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <p className="text-sm text-gray-300 text-center">Team Collaboration</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 text-center">
                    <h3 className="text-white font-bold text-lg mb-2">MiniPupper Workshop</h3>
                    <p className="text-sm text-gray-400 mb-4">IEEE Region 1 & Region 2 | May 2, 2026</p>
                    <p className="text-center text-xs text-gray-500">&copy; {new Date().getFullYear()} MiniPupper Workshop</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;