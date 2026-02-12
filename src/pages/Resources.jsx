import React from 'react';

const Resources = () => {
    const resources = [
        {
            category: 'Minipupper Resources',
            items: [
                { title: 'MiniPupper 2 Product Page', url: 'https://mangdang.store/products/mp2' },
                { title: 'Mini Pupper ROS2 Repository', url: 'https://github.com/mangdangroboticsclub/mini_pupper_ros' },
                { title: 'Mini Pupper Documentation', url: 'https://minipupperdocs.readthedocs.io/en/latest/' }
            ]
        },
        {
            category: 'ROS2',
            items: [
                { title: 'ROS2 Humber Documentation', url: 'https://docs.ros.org/en/humble/' },
                { title: 'ROS2 Tutorials', url: 'https://docs.ros.org/en/humble/Tutorials.html' },
                { title: 'ROS2 GitHub Repository', url: 'https://github.com/ros2' }
            ]
        },
        {
            category: 'Inverse Kinematics & Robotics',
            items: [
                { title: 'Inverse Kinematics Overview', url: 'https://en.wikipedia.org/wiki/Inverse_kinematics' },
                { title: 'Robot Academy (Peter Corke)', url: 'https://robotacademy.net.au' },
            ]
        },
{
    category: 'IEEE Student Competition',
    items: [
        { title: 'IEEE Student Competition Homepage', url: 'https://www.ieee.org' },
        { title: 'IEEE R1/R2 Student Conference – Competition details coming soon', url: '' }
    ]
},

    ];

    return (
        <div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
                    <p className="text-xl">Everything you need to succeed in the workshop</p>
                </div>
            </div>

            <section className="py-16 px-4">
                <div className="container max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {resources.map((section, idx) => (
                            <div key={idx} className="card">
                                <h3 className="text-2xl font-semibold mb-6 text-blue-600 border-b pb-3">{section.category}</h3>
                                <ul className="space-y-3">
                                    {section.items.map((item, iidx) => (
                                        <li key={iidx}>
                                            <a href={item.url} className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                                                <span>→</span>
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-blue-50">
                <div className="container max-w-4xl mx-auto">
                    <div className="card mb-8">
                        <h2 className="text-3xl font-bold mb-6 text-blue-600">Pre-Workshop Setup Guide</h2>
                        <div className="text-gray-700 space-y-4">
                            <p>To get the most out of the hands-on sessions, we recommend having the following set up on your laptop before arriving:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Ubuntu 22.04 LTS (native or in a VM)</li>
                                <li>ROS2 Humble Hawksbill (installation guide)</li>
                                <li>Python 3.10+</li>
                                <li>Git</li>
                            </ul>
                            <p className="pt-2">Detailed setup instructions will be emailed to registered participants two weeks before the workshop.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;