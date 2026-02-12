import React from 'react';

const Directions = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Directions & Venue</h1>
                    <p className="text-xl">How to get to the MiniPupper Workshop</p>
                </div>
            </div>

            <section className="py-16 px-4">
                <div className="container max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Workshop Location</h2>
                        <div className="card">
                            <h3 className="text-xl font-semibold mb-4">Robotics Innovation Center</h3>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <p className="font-semibold text-gray-900">Address</p>
                                    <p>123 Tech Innovation Drive</p>
                                    <p>Silicon Valley, CA 94025</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Phone</p>
                                    <a href="tel:+14155551234" className="text-blue-600 hover:underline">+1 (415) 555-1234</a>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Email</p>
                                    <a href="mailto:info@minipupper.com" className="text-blue-600 hover:underline">info@minipupper.com</a>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Hours</p>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6">Getting There</h2>
                        <div className="space-y-6">
                            <div className="card">
                                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                    <span>🚗</span> By Car
                                </h3>
                                <p className="text-gray-700">From Highway 101, take the Tech Drive exit. Free parking is available in Lot A and B.</p>
                            </div>
                            <div className="card">
                                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                    <span>🚐</span> Public Transit
                                </h3>
                                <p className="text-gray-700">Take the Metro Bus Line 22 or 45 to Tech Drive Station. The facility is a 5-minute walk from the station.</p>
                            </div>
                            <div className="card">
                                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                    <span>✈️</span> By Air
                                </h3>
                                <p className="text-gray-700">San Jose International Airport (SJC) is 20 minutes away. Shuttle service available upon request.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-gray-50">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Parking & Accommodation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card">
                            <h3 className="text-xl font-semibold mb-4">Parking Information</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span><strong>Free parking</strong> for all workshop attendees</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span><strong>Covered parking</strong> in Lot B available</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span><strong>EV charging</strong> stations on site</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span><strong>Valet service</strong> available</span>
                                </li>
                            </ul>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-semibold mb-4">Nearby Hotels</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>
                                    <p className="font-semibold">TechPark Hotel (2 miles)</p>
                                    <p className="text-sm">15% workshop discount available</p>
                                </li>
                                <li>
                                    <p className="font-semibold">Silicon Valley Inn (3 miles)</p>
                                    <p className="text-sm">Special group rates for participants</p>
                                </li>
                                <li>
                                    <p className="font-semibold">Innovation Suites (4 miles)</p>
                                    <p className="text-sm">Extended stay packages available</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Directions;