import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
                <div className="container max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">MiniPupper Robotics Workshop 2026</h1>
                    <p className="text-xl mb-8">Join us for an exciting journey into quadruped robotics and advanced automation. Build, learn, and compete.</p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link to="/registration" className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">Register Now</Link>
                        <Link to="/program" className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium">View Program</Link>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="container max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Why Join Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-600">🤖 Hands-on Learning</h3>
                            <p>Work directly with MiniPupper robots and learn cutting-edge robotics concepts from industry experts.</p>
                        </div>
                        <div className="card">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-600">🏆 Competition</h3>
                            <p>Test your skills in friendly competitions with other team members and win prizes.</p>
                        </div>
                        <div className="card">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-600">📚 Resources</h3>
                            <p>Get exclusive access to documentation, tutorials, and code samples for your projects.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-16 px-4">
                <div className="container max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-lg text-gray-700 mb-8">Limited spots available. Sign up today and reserve your place in the workshop.</p>
                    <Link to="/registration" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">Register Today</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;