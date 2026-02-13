import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const heroImages = [
        `${process.env.PUBLIC_URL}/images/Past-IEEE-1.jpg`,
        `${process.env.PUBLIC_URL}/images/Past-IEEE-2.jpg`,
        `${process.env.PUBLIC_URL}/images/Past-IEEE-3.jpg`,
        `${process.env.PUBLIC_URL}/images/Past-IEEE-4.jpeg`,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const handlePrev = () => {
        setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    };

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
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
                    src={heroImages[currentImageIndex]}
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ transition: 'opacity 0.5s ease-in-out' }}
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

            <section className="py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8">About the Workshop</h2>
                    <div className="space-y-6 text-lg text-gray-700">
                        <p>In this hands-on session, participants will explore cloud-based systems and integrate advanced AI tools, including generative AI, to develop and control robotic applications using the quadruped Mini Pupper (robot dog). Blending theory with practical experience, participants will learn to manage robotic operations from design to deployment, leveraging AWS cloud services, Python programming, the Robot Operating System (ROS), and AI technologies.</p>
                        
                        <p>During the workshop, participants will program the robot to follow a line and perform dance routines synced to music of their choice. The event promises to be a fun, engaging experience, designed to spark interest in robotic programming. Participants will also have the chance to apply their newly acquired skills in a Mini Pupper competition at the <a href="https://attend.ieee.org/stucon-2025/" className="text-blue-600 hover:underline">IEEE R1/R2 Student Conference</a>.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-gray-50">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8">About the Mini Pupper</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="text-lg text-gray-700 space-y-4">
                            <p><a href="https://mangdang.store/products/mp2" className="text-blue-600 hover:underline">Mini Pupper</a> by <strong><a href="https://www.mangdang.net/" className="text-blue-600 hover:underline">MangDang</a></strong> is an affordable, open-source four-legged robot priced under $1,000 — making it one of the most accessible quadruped platforms for education and research.</p>
                            <p>Despite its compact size, Mini Pupper is a fully capable robotics platform that supports ROS2, computer vision, SLAM, and can be integrated with Google Gemini for AI-powered interactions and natural language control.</p>
                            <p>With its low cost and powerful capabilities, Mini Pupper is the ideal tool for universities looking to bring hands-on AI and robotics education to their students without breaking the budget.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/mini-pupper-2.jpg`}
                                alt="Mini Pupper 2 robot"
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <p className="mt-4 text-sm text-gray-600">Mini Pupper 2 Robot</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center">What You'll Learn</h2>
                    <div className="card text-lg text-gray-700">
                        <p>This workshop covers the fundamentals you need to prepare for the <strong>Mini Pupper Competition:</strong></p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li><strong>Cloud-Based Robotic</strong> – Using AWS cloud services for robotic applications</li>
                           <li><strong>ROS & Python Programming</strong>  – Setting up and working with ROS on Mini Pupper</li>
                           <li><strong>Generative AI Integration</strong>  – Leveraging AI tools including Google Gemini for intelligent behaviors</li>
                           <li><strong>Line Following</strong>  – Programming Mini Pupper to autonomously follow a line</li>
                           <li><strong>Dance Routines</strong>  – Creating movement sequences synced to music</li>
                           <li><strong>Competition Prep</strong>  – Skills for the IEEE R1/R2 Mini Pupper Competition</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center">What You'll Take Home</h2>
                    <div className="card text-lg text-gray-700">
                        <p>After completing this workshop, you will know exactly what is needed to bring a hands-on robotics and AI class back to your university.
                             You'll leave with a clear understanding of curriculum structure, hardware requirements, software setup, 
                             and teaching strategies to train your students with interests in AI and robotics using the Mini Pupper platform. 
                             Whether you plan to offer a semester-long course, a weekend bootcamp, or prepare a competition team, 
                             this workshop gives you the complete playbook to get started.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center">Who Should Attend</h2>
                    <div className="card text-lg text-gray-700">
                        <p>This workshop is designed for <strong>IEEE student branch faculty advisors in Regions 1 and 2</strong> who are preparing their student teams for the IEEE R1/R2 Student Conference Mini Pupper Competition.</p>
                        <p className="mt-4">Whether you have prior robotics experience or are new to ROS and quadruped robots, this workshop will equip you with the knowledge and confidence to guide your students.</p>
                    </div>
                </div>
            </section>

            <section className="bg-blue-50 py-16 px-4">
                <div className="container max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Speaker</h2>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/dr-li-bai.jpg`}
                        alt="Dr. Li Bai"
                        className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
                    />
                    <p className="text-lg text-gray-700 mb-8"><strong>Dr. Li Bai,</strong> Associate Dean for Research, Graduate Studies, and Faculty Affairs at Temple University, 
                        is a Principal Investigator leading research in AI-driven robotics, distributed information systems, federated learning, and cybersecurity. 
                        His work integrates ROS2, AWS, and Google Gemini for intelligent automation. A Senior Member of IEEE, Dr. Bai currently serves as the IEEE Region 2 Student Activities Coordinator 
                        (SAC) and is passionate about STEM outreach, working with high school teachers to develop robotics programs that inspire the next generation of engineers.</p> 
                </div>
            </section>
        </div>
    );
};

export default Home;