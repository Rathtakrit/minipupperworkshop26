import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
                <div className="container max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-3">Mini Pupper Robotics Workshop</h1>
                    <p className="text-2xl mb-2">May 2, 2026 | Amy Gutmann Hall, University of Pennsylvania</p>
                    <p className="text-xl mb-8 opacity-90">Cloud-Based Robotics & AI Integration for IEEE Faculty Advisors</p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link to="/registration" className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-bold">Register Now</Link>
                        <Link to="/program" className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors font-bold">View Program</Link>
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
                                src="/images/mini-pupper-2.jpg"
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
                        src="/images/dr-li-bai.jpg"
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