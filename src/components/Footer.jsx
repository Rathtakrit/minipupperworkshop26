import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200 mt-20">
            <div className="container mx-auto max-w-7xl px-4 py-16">
                {/* Organizers Section */}
                <div className="mb-12">
                    <div className="text-center mb-10">
                        <h3 className="text-white font-bold text-3xl mb-3">Organizers</h3>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            This workshop is organized in collaboration with MangDang and the IEEE R1/R2 Student Activities Committee.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* IEEE */}
                        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105">
                            <div className="h-48 bg-white flex items-center justify-center p-6">
                                <img 
                                    src={`${process.env.PUBLIC_URL}/images/ieee-logo.png`} 
                                    alt="IEEE Logo" 
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div className="bg-blue-600 p-4">
                                <p className="text-lg font-bold text-white text-center">IEEE</p>
                                <p className="text-sm text-blue-100 text-center">Institute of Electrical and Electronics Engineers</p>
                            </div>
                        </div>

                        {/* MangDang */}
                        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105">
                            <div className="h-48 bg-white flex items-center justify-center p-6">
                                <img 
                                    src={`${process.env.PUBLIC_URL}/images/mangdang-logo.png`} 
                                    alt="MangDang Logo" 
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
                                <p className="text-lg font-bold text-white text-center">MangDang</p>
                                <p className="text-sm text-orange-100 text-center">Mini Pupper Robotics Platform</p>
                            </div>
                        </div>

                        {/* IEEE R1/R2 */}
                        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105">
                            <div className="h-48 bg-white flex items-center justify-center p-6">
                                <img 
                                    src={`${process.env.PUBLIC_URL}/images/ieee-r1r2-better-together.jpg`} 
                                    alt="IEEE Region 1 & 2 Logo" 
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4">
                                <p className="text-lg font-bold text-white text-center">IEEE Regions 1 & 2</p>
                                <p className="text-sm text-cyan-100 text-center">Better Together</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 pt-10 mt-10">
                    <div className="text-center mb-6">
                        <h3 className="text-white font-bold text-2xl mb-2">🤖 MiniPupper Workshop 2026</h3>
                        <p className="text-gray-400 mb-2">IEEE Region 1 & Region 2</p>
                        <p className="text-blue-400 font-semibold text-lg">May 2, 2026 | Amy Gutmann Hall, University of Pennsylvania</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-400 mb-2">For questions or more information, please contact the organizing committee</p>
                        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} MiniPupper Workshop. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;