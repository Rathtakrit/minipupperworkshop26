import React from 'react';

const Resources = () => {
    const resources = [
        {
            category: 'Documentation',
            items: [
                { title: 'MiniPupper Official Docs', url: '#' },
                { title: 'ROS2 Setup Guide', url: '#' },
                { title: 'Python API Reference', url: '#' }
            ]
        },
        {
            category: 'Tutorials',
            items: [
                { title: 'Getting Started Guide', url: '#' },
                { title: 'Advanced Motion Programming', url: '#' },
                { title: 'Sensor Integration Tutorial', url: '#' }
            ]
        },
        {
            category: 'Code Samples',
            items: [
                { title: 'Basic Movement Examples', url: '#' },
                { title: 'Object Detection', url: '#' },
                { title: 'Team Collaboration Projects', url: '#' }
            ]
        },
        {
            category: 'Community',
            items: [
                { title: 'Forum Discussion Board', url: '#' },
                { title: 'GitHub Repository', url: '#' },
                { title: 'Slack Community Chat', url: '#' }
            ]
        }
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
                    <div className="card border-2 border-blue-600">
                        <h2 className="text-2xl font-bold mb-4 text-blue-600">📞 Need Help?</h2>
                        <p className="text-gray-700 mb-6">Our support team is here to assist you. Reach out us anytime:</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <h4 className="font-semibold mb-2">Email</h4>
                                <a href="mailto:support@minipupper.com" className="text-blue-600 hover:underline">support@minipupper.com</a>
                            </div>
                            <div className="text-center">
                                <h4 className="font-semibold mb-2">Discord</h4>
                                <a href="#" className="text-blue-600 hover:underline">Join our Discord</a>
                            </div>
                            <div className="text-center">
                                <h4 className="font-semibold mb-2">Office Hours</h4>
                                <p className="text-gray-700">Mon-Fri 10am-6pm EST</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;