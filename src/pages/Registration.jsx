import React from 'react';

const Registration = () => {
    const handleRegister = () => {
        // Replace with your actual registration URL (Google Form, Typeform, etc.)
        window.location.href = 'https://forms.google.com/YOUR_FORM_ID';
    };

    return (
        <div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
                <div className="container max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Register for the Workshop</h1>
                    <p className="text-xl">Secure your spot in our exclusive 4-day robotics workshop</p>
                </div>
            </div>

            <section className="py-16 px-4">
                <div className="container max-w-2xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold mb-4">Ready to Join Us?</h2>
                            <p className="text-gray-700 mb-6">Click the button below to complete your registration. Limited spots available!</p>
                        </div>

                        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-8">
                            <h3 className="text-lg font-semibold mb-4 text-blue-600">What's Included:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>MiniPupper robot kit</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>4 days of hands-on training</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>Expert mentorship & guidance</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>Meals & refreshments</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>Certificate of completion</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span>Access to exclusive resources</span>
                                </li>
                            </ul>
                        </div>

                        <button 
                            onClick={handleRegister}
                            className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg"
                        >
                            Register Now
                        </button>

                        <p className="text-center text-sm text-gray-600 mt-6">
                            Questions? Email us at <a href="mailto:support@minipupper.com" className="text-blue-600 hover:underline">support@minipupper.com</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;