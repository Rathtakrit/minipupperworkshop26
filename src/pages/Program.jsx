import React from 'react';

const Program = () => {
    const scheduleItems = [
        {
            time: '9:30am',
            title: 'Registration',
            description: 'Check in, pick up your name badge, and grab a coffee before the workshop begins.'
        },
        {
            time: '10:00am',
            title: 'Workshop',
            subtitle: 'Dr. Li Bai, Temple University',
            description: 'In this hands-on session, participants will explore cloud-based systems and integrate advanced AI tools, including generative AI, to develop and control robotic applications using the quadruped Mini Pupper (robot dog). Blending theory with practical experience, participants will learn to manage robotic operations from design to deployment, leveraging AWS cloud services, Python programming, the Robot Operating System (ROS), and AI technologies. During the workshop, participants will program the robot to follow a line and perform dance routines synced to music of their choice.'
        },
        {
            time: '12:00pm',
            title: 'Lunch Provided',
            description: ''
        },
        {
            time: '1:00pm',
            title: 'Robot Demonstrations',
            subtitle: 'All Participants',
            description: 'Participants showcase what they\'ve built during the workshop. Teams will demonstrate their Mini Pupper line-following and dance routines. This is a fun, engaging session designed to spark interest in robotic programming and help participants apply their newly acquired skills in preparation for the Mini Pupper competition at the IEEE R1/R2 Student Conference.'
        },
        {
            time: '2:00pm',
            title: 'Adjourn',
            description: 'Thank you for attending! Safe travels.'
        }
    ];

    return (
        <div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Workshop Program</h1>
                    <p className="text-xl">May 2, 2026</p>
                </div>
            </div>

            <section className="py-16 px-4">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Workshop Program — May 2, 2026</h2>
                    <div className="space-y-4">
                        {scheduleItems.map((item, idx) => (
                            <div key={idx} className="card border-l-4 border-blue-600">
                                <div className="flex gap-6">
                                    <div className="text-blue-600 font-bold text-lg min-w-fit">{item.time}</div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                        {item.subtitle && <p className="text-blue-600 font-semibold text-sm mb-2">{item.subtitle}</p>}
                                        {item.description && <p className="text-gray-700">{item.description}</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Program;