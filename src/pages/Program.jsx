import React from 'react';

const Program = () => {
    const schedule = [
        { day: 'Day 1', title: 'Introduction & Setup', activities: ['Welcome & Overview', 'Robot Assembly', 'Software Installation', 'Basic Movement Tests'] },
        { day: 'Day 2', title: 'Programming Fundamentals', activities: ['Python Basics', 'Robot Control APIs', 'Sensor Integration', 'First Program Challenge'] },
        { day: 'Day 3', title: 'Advanced Control', activities: ['Motion Planning', 'Obstacle Avoidance', 'Team Projects', 'Competition Prep'] },
        { day: 'Day 4', title: 'Competition Day', activities: ['Final Challenges', 'Team Competitions', 'Awards Ceremony', 'Closing Remarks'] }
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
                    <h2 className="text-3xl font-bold mb-12 text-center">Program Schedule</h2>
                    <div className="space-y-8">
                        {schedule.map((day, idx) => (
                            <div key={idx} className="card border-l-4 border-blue-600">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-600 text-white px-4 py-2 rounded font-bold text-lg whitespace-nowrap">
                                        {day.day}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-semibold mb-3">{day.title}</h3>
                                        <ul className="space-y-2">
                                            {day.activities.map((activity, aidx) => (
                                                <li key={aidx} className="flex items-center gap-3">
                                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                                    {activity}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-gray-50">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Requirements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card">
                            <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✓</span><span>Basic programming knowledge</span></li>
                                <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✓</span><span>Laptop or desktop computer</span></li>
                                <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✓</span><span>Enthusiasm for robotics</span></li>
                            </ul>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-semibold mb-4">What We Provide</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✓</span><span>MiniPupper robot kit</span></li>
                                <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✓</span><span>Complete documentation</span></li>
                                <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✓</span><span>Expert mentorship</span></li>
                                <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✓</span><span>Meals & refreshments</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Program;