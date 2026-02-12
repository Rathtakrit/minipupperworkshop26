import React from 'react';

const Directions = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Workshop Location & Date</h1>
                    <p className="text-xl">May 2, 2026 | Philadelphia, PA</p>
                </div>
            </div>

            <section className="py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Venue Details</h2>
                            <div className="card">
                                <h3 className="text-2xl font-semibold mb-4">Amy Gutmann Hall</h3>
                                <div className="space-y-4 text-gray-700">
                                    <div>
                                        <p className="font-semibold">University of Pennsylvania</p>
                                        <p>Philadelphia, PA</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-blue-600">Date & Time</p>
                                        <p>Monday, May 2, 2026</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-blue-600">Getting There</p>
                                        <p>Detailed directions and parking information will be provided in your confirmation email after registration approval.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">What to Bring</h2>
                            <div className="card">
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-600 font-bold text-lg">✓</span>
                                        <span>A laptop with Windows 10 or 11</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-600 font-bold text-lg">✓</span>
                                        <span>Your enthusiasm for robotics!</span>
                                    </li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-gray-300">
                                    <p className="text-sm text-gray-600"><strong>Note:</strong> Mini Pupper robotics kits will be provided onsite for the hands-on sessions. Detailed setup instructions will be sent after registration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-blue-50">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Important Dates</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="card text-center">
                            <div className="text-blue-600 font-bold text-lg mb-2">Registration Deadline</div>
                            <p className="text-2xl font-bold">April 18, 2026</p>
                        </div>
                        <div className="card text-center">
                            <div className="text-blue-600 font-bold text-lg mb-2">Workshop Date</div>
                            <p className="text-2xl font-bold">May 2, 2026</p>
                        </div>
                        <div className="card text-center">
                            <div className="text-blue-600 font-bold text-lg mb-2">Confirmations Sent</div>
                            <p className="text-2xl font-bold">April 21, 2026</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Directions;
