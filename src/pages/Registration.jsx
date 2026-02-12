import React from 'react';

const Registration = () => {
    const handleRegister = () => {
        window.location.href = 'https://events.vtools.ieee.org/m/538617'; 
    };



    return (
        <div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Registration</h1>
                    <p className="text-xl">Join us for the IEEE Mini Pupper Workshop</p>
                </div>
            </div>

            <section className="py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <div className="prose max-w-none mb-12">
                        <h2 className="text-3xl font-bold mb-4">About This Workshop</h2>
                        <p className="text-lg text-gray-700 mb-4">Registration for the Mini Pupper Workshop is open to all IEEE student branch faculty advisors in Regions 1 and 2. Space is limited, so please register early to secure your spot.</p>
                    </div>

                    <div className="card mb-8">
                        <h3 className="text-2xl font-bold mb-4">How to Register</h3>
                        <p className="text-gray-700 mb-6">Registration is handled through IEEE vTools. To register, you will need the support of your local IEEE Section Chair and your department chair. Please secure their approval before submitting your registration.</p>
                        <button 
                            onClick={handleRegister}
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg mb-4"
                        >
                            Click here to register via IEEE vTools
                        </button>
                        <p className="text-gray-700">Once your registration is supported and approved, your local workshop arrangements — including hotel accommodations and meals — will be covered by the IEEE Region 1 and Region 2 Strategic Initiative Fund.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card">
                            <h3 className="text-2xl font-bold mb-6">What to Bring</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 font-bold">•</span>
                                    <span>A laptop with Windows 10 or 11</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 font-bold">•</span>
                                    <span>Your enthusiasm for robotics!</span>
                                </li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-gray-300">
                                <p className="text-sm text-gray-600"><strong>Note:</strong> Mini Pupper robotics kits will be provided onsite for the hands-on sessions. Detailed setup instructions will be sent after registration.</p>
                            </div>
                        </div>

                        <div className="card">
                            <h3 className="text-2xl font-bold mb-6">Important Dates</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-blue-600 font-bold">Registration Deadline</p>
                                    <p className="text-lg font-semibold">April 18, 2026</p>
                                </div>
                                <div>
                                    <p className="text-blue-600 font-bold">Workshop Date</p>
                                    <p className="text-lg font-semibold">May 2, 2026</p>
                                </div>
                                <div>
                                    <p className="text-blue-600 font-bold">Confirmation Emails Sent By</p>
                                    <p className="text-lg font-semibold">April 21, 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-blue-50">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Funding & Travel Support</h2>
                    <div className="card">
                        <p className="text-gray-700 mb-4">We will select <strong>20–30 faculty advisors from IEEE Region 1 and Region 2</strong>  to participate in this workshop. Selected advisors must demonstrate to their Section Chairs a commitment to increase student membership in their student branch and a willingness to conduct outreach of AI technologies to their local schools, with the support of their department chairs.</p>
                        <p className="text-gray-700 mb-4">Once your registration is approved with the support of your local IEEE Section Chair and department chair, the IEEE Region 1 & Region 2 Strategic Initiative Fund will cover your hotel accommodations and meals at the workshop location.</p>
                        <p className="text-gray-700 mb-4">Travel to and from the workshop (airfare, mileage, train, etc.) is the responsibility of each attendee. Faculty advisors are encouraged to seek travel support from their local IEEE Section and their respective department chairs to cover transportation costs from home to the workshop location in Philadelphia.</p>
                        <p className="text-gray-700">We recommend reaching out to your local Section and department early, as funding approval processes may take time. If you need a formal invitation letter or supporting documentation for your funding request, please contact the organizing committee.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;