import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [hoveredProduct, setHoveredProduct] = useState(0); // 0: Mini Pupper 1, 1: Mini Pupper 2, 2: Turtle
    const [customDesignIndex, setCustomDesignIndex] = useState(0);

    const heroImages = [
        `${process.env.PUBLIC_URL}/images/Past-IEEE-1.jpg`,
        `${process.env.PUBLIC_URL}/images/Past-IEEE-2.jpg`,
        `${process.env.PUBLIC_URL}/images/Past-IEEE-3.jpg`,
        `${process.env.PUBLIC_URL}/images/Past-IEEE-4.jpeg`,
    ];

    const mangdangProductImages = [
        `${process.env.PUBLIC_URL}/images/mini-pupper-1.png`,
        `${process.env.PUBLIC_URL}/images/mini-pupper-2.png`,
        `${process.env.PUBLIC_URL}/images/MD-turtle.png`,
    ];

    const customDesignImages = [
        `${process.env.PUBLIC_URL}/images/minipupper-skin-1.png`,
        `${process.env.PUBLIC_URL}/images/minipupper-skin-2.jpg`,
        `${process.env.PUBLIC_URL}/images/minipupper-skin-3.jpg`,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCustomDesignIndex((prev) => (prev + 1) % customDesignImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [customDesignImages.length]);

    const handlePrev = () => {
        setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    };

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    };

    const handleCustomDesignPrev = () => {
        setCustomDesignIndex((prev) => (prev - 1 + customDesignImages.length) % customDesignImages.length);
    };

    const handleCustomDesignNext = () => {
        setCustomDesignIndex((prev) => (prev + 1) % customDesignImages.length);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        setTouchEnd(e.changedTouches[0].clientX);
        if (touchStart - e.changedTouches[0].clientX > 50) {
            handleNext();
        }
        if (e.changedTouches[0].clientX - touchStart > 50) {
            handlePrev();
        }
    };

    return (
        <div>
            <section 
                className="text-white py-12 md:py-20 px-4 min-h-screen md:min-h-auto flex items-center relative overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <img
                    key={currentImageIndex}
                    src={heroImages[currentImageIndex]}
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ animation: 'fadeIn 0.8s ease-in-out' }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                
                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 md:p-3 rounded-full transition-all duration-300"
                    aria-label="Previous image"
                >
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 md:p-3 rounded-full transition-all duration-300"
                    aria-label="Next image"
                >
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentImageIndex ? 'bg-white w-8' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="container max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-glow animate-fade-in">Mini Pupper Robotics Workshop</h1>
                    <p className="text-lg md:text-2xl mb-2 md:mb-3 opacity-95">May 2, 2026 | Amy Gutmann Hall, University of Pennsylvania</p>
                    <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90">Cloud-Based Robotics & AI Integration for IEEE Faculty Advisors</p>
                    <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
                        <Link to="/registration" className="px-4 md:px-6 py-2 md:py-3 bg-white text-blue-600 rounded-lg font-bold text-sm md:text-base btn-hover-lift">Register Now</Link>
                        <Link to="/program" className="px-4 md:px-6 py-2 md:py-3 bg-white bg-opacity-20 text-white rounded-lg font-bold text-sm md:text-base btn-hover-lift hover:bg-opacity-30">View Program</Link>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 text-blue-900">About the Workshop</h2>
                    <p className="text-blue-600 font-semibold mb-8 text-lg">Hands-on Robotics & AI Integration</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">☁️</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">Cloud-Based Robotics</h3>
                            <p className="text-gray-700">Explore advanced systems and integrate AI tools including generative AI to develop and control robotic applications using the quadruped Mini Pupper. Learn to manage operations from design to deployment using AWS, Python, and ROS.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">🎵</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">Practical Applications</h3>
                            <p className="text-gray-700">Program the robot to follow lines and perform dance routines synced to music. Have fun while learning, and apply your skills in the <a href="https://attend.ieee.org/stucon-2025/" className="text-blue-600 font-semibold hover:underline">IEEE R1/R2 Student Conference</a> Mini Pupper Competition.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 bg-gray-50">
                <div className="container max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">Meet the Mini Pupper</h2>
                        <p className="text-lg text-gray-600">Affordable, Open-Source Robotics Platform by <a href="https://www.mangdang.net/" className="text-blue-600 font-semibold hover:underline">MangDang</a></p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1: Mangdang Products */}
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                            <div className="h-64 bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
                                <img
                                    src={mangdangProductImages[hoveredProduct]}
                                    alt="Product"
                                    className={`transition-all duration-300 ${
                                        hoveredProduct === 1 ? 'h-full w-auto object-contain' : 'w-full h-full object-cover'
                                    }`}
                                />
                                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">Official</div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 text-gray-900">Mangdang Products</h3>
                                <div className="space-y-3 mb-6">
                                    <button
                                        onMouseEnter={() => setHoveredProduct(0)}
                                        className={`w-full text-left flex items-center gap-3 p-3 rounded-lg transition-all ${
                                            hoveredProduct === 0 ? 'bg-blue-100 border-2 border-blue-600' : 'bg-gray-50 hover:bg-gray-100'
                                        }`}
                                    >
                                        <span className="text-2xl">🐕‍🦺</span>
                                        <span className="text-gray-700"><strong>Mini Pupper 1</strong> - The Beloved Original </span>
                                    </button>
                                    <button
                                        onMouseEnter={() => setHoveredProduct(1)}
                                        className={`w-full text-left flex items-center gap-3 p-3 rounded-lg transition-all ${
                                            hoveredProduct === 1 ? 'bg-blue-100 border-2 border-blue-600' : 'bg-gray-50 hover:bg-gray-100'
                                        }`}
                                    >
                                        <span className="text-2xl">🦾</span>
                                        <span className="text-gray-700"><strong>Mini Pupper 2</strong> - Even More Powerful!</span>
                                    </button>
                                    <button
                                        onMouseEnter={() => setHoveredProduct(2)}
                                        className={`w-full text-left flex items-center gap-3 p-3 rounded-lg transition-all ${
                                            hoveredProduct === 2 ? 'bg-blue-100 border-2 border-blue-600' : 'bg-gray-50 hover:bg-gray-100'
                                        }`}
                                    >
                                        <span className="text-2xl">🐢</span>
                                        <span className="text-gray-700"><strong>MD Turtle</strong> - With Edge AI </span>
                                    </button>
                                </div>
                                <p className="text-gray-700 mb-4"><strong>Priced under $1,000 </strong>— one of the most accessible quadruped platforms for education and research.</p>
                                <a href="https://mangdang.store/products/mp2" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">Own One</a>
                            </div>
                        </div>

                        {/* Card 2: Custom Designs */}
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                            <div className="h-64 bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
                                <img
                                    key={customDesignIndex}
                                    src={customDesignImages[customDesignIndex]}
                                    alt="Custom Design"
                                    className="w-full h-full object-cover"
                                    style={{ animation: 'fadeIn 0.8s ease-in-out' }}
                                />
                                <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">Custom</div>
                                
                                {/* Gallery Navigation */}
                                <button
                                    onClick={handleCustomDesignPrev}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-900 p-2 rounded-full transition-all"
                                    aria-label="Previous design"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleCustomDesignNext}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-900 p-2 rounded-full transition-all"
                                    aria-label="Next design"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                {/* Gallery Indicators */}
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                                    {customDesignImages.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCustomDesignIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${
                                                index === customDesignIndex ? 'bg-white w-6' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                            }`}
                                            aria-label={`Go to design ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 text-gray-900">Mini Pupper 2 Custom Design</h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl mt-1">🎨</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">Customizable Build</p>
                                            <p className="text-gray-700 text-sm">Build your own Mini Pupper 2 with custom configurations</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl mt-1">🔧</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">Full Customization</p>
                                            <p className="text-gray-700 text-sm">Choose components, colors, and features</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl mt-1">💡</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">Your Vision</p>
                                            <p className="text-gray-700 text-sm">Create unique robotics projects tailored to your needs</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4">Personalize your Minipupper, and show of your creativity</p>
                            </div>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="text-4xl mb-3">🏗️</div>
                            <h4 className="font-bold text-gray-900 mb-2">ROS2 Support</h4>
                            <p className="text-gray-700 text-sm">Full Robot Operating System integration</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="text-4xl mb-3">🧠</div>
                            <h4 className="font-bold text-gray-900 mb-2">AI Powered</h4>
                            <p className="text-gray-700 text-sm">Integrated with Google Gemini & ML tools</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="text-4xl mb-3">💰</div>
                            <h4 className="font-bold text-gray-900 mb-2">Budget Friendly</h4>
                            <p className="text-gray-700 text-sm">Under $1,000 for complete platform</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 bg-white">
                <div className="container max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">What You'll Learn</h2>
                        <p className="text-lg text-gray-600">Master the skills needed for the Mini Pupper Competition</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: '☁️', title: 'Cloud Robotics', desc: 'Using AWS cloud services for robotic applications' },
                            { icon: '🐍', title: 'ROS & Python', desc: 'Setting up and working with ROS on Mini Pupper' },
                            { icon: '🧠', title: 'Generative AI', desc: 'Leveraging Google Gemini for intelligent behaviors' },
                            { icon: '➡️', title: 'Line Following', desc: 'Programming Mini Pupper to autonomously follow a line' },
                            { icon: '💃', title: 'Dance Routines', desc: 'Creating movement sequences synced to music' },
                            { icon: '🏆', title: 'Competition Prep', desc: 'Skills for the IEEE R1/R2 Mini Pupper Competition' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 group hover:scale-105 cursor-pointer">
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                <p className="text-gray-700 group-hover:text-gray-900">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">What You'll Take Home</h2>
                        <p className="text-lg text-gray-600">Your complete playbook for success</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { num: '1️⃣', title: 'Curriculum Structure', desc: 'Complete course framework for your students' },
                            { num: '2️⃣', title: 'Hardware Guide', desc: 'Full requirements and setup instructions' },
                            { num: '3️⃣', title: 'Software Setup', desc: 'ROS2, AWS, and AI tool configurations' },
                            { num: '4️⃣', title: 'Teaching Strategies', desc: 'Best practices for guiding student learning' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-green-500 group">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl flex-shrink-0">{item.num}</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-gray-700">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 bg-green-600 text-white p-8 rounded-xl text-center">
                        <p className="text-lg font-semibold mb-3">Whether you plan to offer a semester-long course, a weekend bootcamp, or prepare a competition team...</p>
                        <p className="text-2xl font-bold">This workshop gives you the complete playbook to get started! 🚀</p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 bg-white">
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">Who Should Attend</h2>
                        <p className="text-lg text-gray-600">Perfect for IEEE Faculty Advisors & Student Leaders</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl shadow-xl p-8 md:p-12 text-center mb-8">
                        <p className="text-2xl font-bold mb-4">IEEE Student Branch Faculty Advisors</p>
                        <p className="text-lg mb-4 opacity-95">In Regions 1 and 2 preparing teams for the IEEE R1/R2 Student Conference</p>
                        <div className="text-5xl">📍</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-8 rounded-xl border-2 border-blue-200 text-center">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Robotics Enthusiasts</h3>
                            <p className="text-gray-700">New to ROS and quadruped robots? Perfect! Gain foundational knowledge with expert guidance.</p>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-xl border-2 border-blue-200 text-center">
                            <div className="text-4xl mb-4">⭐</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced Leaders</h3>
                            <p className="text-gray-700">Already have robotics experience? Enhance your skills with advanced AI integration techniques.</p>
                        </div>
                    </div>
                    <div className="mt-10 bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-xl border-l-4 border-cyan-500">
                        <p className="text-gray-800 text-center text-lg">Whether you have prior experience or are just starting, this workshop will equip you with the <strong>knowledge and confidence to guide your students</strong> in AI-powered robotics. 💡</p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white">
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-3">Meet Your Instructor</h2>
                        <p className="text-lg text-blue-200">Learn from an industry expert and IEEE leader</p>
                    </div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white border-opacity-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                            {/* Image */}
                            <div className="text-center">
                                <div className="relative inline-block pb-8">
                                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 p-1 mx-auto">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/dr-li-bai.jpg`}
                                            alt="Dr. Li Bai"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">IEEE Senior</div>
                                </div>
                            </div>
                            {/* Bio */}
                            <div className="md:col-span-2">
                                <h3 className="text-3xl font-bold mb-2">Dr. Li Bai</h3>
                                <p className="text-cyan-300 font-semibold mb-6">Associate Dean for Research, Graduate Studies & Faculty Affairs at Temple University</p>
                                
                                <div className="space-y-4 mb-6">
                                    <div className="flex gap-3">
                                        <span className="text-2xl">🤖</span>
                                        <p className="text-gray-100">Principal Investigator in <strong>AI-driven robotics</strong> and distributed systems</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-2xl">☁️</span>
                                        <p className="text-gray-100">Expert integrating <strong>ROS2, AWS, and Google Gemini</strong> for intelligent automation</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-2xl">🎓</span>
                                        <p className="text-gray-100"><strong>IEEE Region 2 Student Activities Coordinator</strong> - Passionate about STEM education</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-2xl">🌟</span>
                                        <p className="text-gray-100">Devoted to inspiring the <strong>next generation of engineers</strong> through robotics programs</p>
                                    </div>
                                </div>
                                
                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">AI & Robotics</span>
                                    <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">Federated Learning</span>
                                    <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">Cybersecurity</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;