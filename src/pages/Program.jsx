import React from 'react';

const Program = () => {
    const curriculum = [
        { title: 'Cloud-Based Robotics', description: 'Using AWS cloud services for robotic applications and deployment' },
        { title: 'ROS & Python Programming', description: 'Setting up and working with ROS on Mini Pupper with Python' },
        { title: 'Generative AI Integration', description: 'Leveraging AI tools including Google Gemini for intelligent behaviors' },
        { title: 'Line Following', description: 'Programming Mini Pupper to autonomously follow a line' },
        { title: 'Dance Routines', description: 'Creating movement sequences synced to music' },
        { title: 'Competition Prep', description: 'Skills and strategies for the IEEE R1/R2 Mini Pupper Competition' }
    ];

    return (
        <div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Workshop Program</h1>
                    <p className="text-xl">A comprehensive 4-day immersive robotics experience</p>
                </div>
            </div>

            <section className="py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">What You'll Learn</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {curriculum.map((item, idx) => (
                            <div key={idx} className="card">
                                <h3 className="text-xl font-semibold mb-3 text-blue-600">{item.title}</h3>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-gray-50">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">What You'll Take Home</h2>
                    <div className="card text-lg text-gray-700 space-y-4">
                        <p>After completing this workshop, you will know exactly what is needed to bring a hands-on robotics and AI class back to your university. You'll leave with a clear understanding of:</p>
                        <ul className="space-y-3 ml-6">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 font-bold">→</span>
                                <span>Curriculum structure and course design</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 font-bold">→</span>
                                <span>Hardware requirements and setup</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 font-bold">→</span>
                                <span>Software setup and configuration</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 font-bold">→</span>
                                <span>Teaching strategies for AI and robotics</span>
                            </li>
                        </ul>
                        <p className="pt-4">Whether you plan to offer a semester-long course, a weekend bootcamp, or prepare a competition team, this workshop gives you the complete playbook to get started.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Program;