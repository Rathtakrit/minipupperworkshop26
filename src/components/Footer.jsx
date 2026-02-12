import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 mt-20 py-12">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="mb-8">
                    <h3 className="text-white font-bold text-lg mb-6">Organizers</h3>
                    <p className="text-white font-bold text-lg mb-6">This workshop is organized in collaboration with MangDang and the IEEE R1/R2 Student Activities Committee. For questions or more information, please contact the organizing committee</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <img src="/images/ieee-logo.png" alt="IEEE-logo" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <p className="text-sm text-gray-300 text-center">IEEE</p>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <img src="/mangdang-logo.png" alt="mangdang-logo" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <p className="text-sm text-gray-300 text-center">MangDang</p>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <img src="/images/ieee-r1r2-better-together.jpg" alt="region1-2-logo" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <p className="text-sm text-gray-300 text-center">Region 1+2</p>
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