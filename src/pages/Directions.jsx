
const Directions = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
            <div className="container max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">Workshop Location & Date</h1>
                <p className="text-xl">May 2, 2026 | Philadelphia, PA</p>
            </div>
            </div>

            <section className="py-16 px-4">
            <div className="container max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Venue Details</h2>
                    <div className="card">
                    <h3 className="text-2xl font-semibold mb-4">Amy Gutmann Hall</h3>
                    <div className="space-y-4 text-gray-700">
                        <div>
                        <img 
                            src="/images/agh-exterior.jpg" 
                            alt="Amy Gutmann Hall Exterior" 
                            className="rounded-lg w-full mb-4 height-48 object-cover"
                        />
                        </div>
                        <div>
                        <p className="font-semibold">University of Pennsylvania</p>
                        <p>Philadelphia, PA</p>
                        </div>
                        <div>
                        <p className="font-semibold text-blue-600">Date & Time</p>
                        <p>Monday, May 2, 2026</p>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-900">
                        <p className="font-semibold text-blue-700">Nearby Accommodations</p>
                        <ul className="space-y-3 text-blue-900">
                            <li className="flex items-start gap-3">
                            <span className="text-blue-700 font-bold text-lg">🏨</span>
                            <div><span className="font-semibold">The Study at University City</span><br />20 S 33rd St, Philadelphia, PA 19104</div>
                            </li>
                            <li className="flex items-start gap-3">
                            <span className="text-blue-700 font-bold text-lg">🏨</span>
                            <div><span className="font-semibold">Homewood Suites University City</span><br />4109 Walnut St, Philadelphia, PA 19104</div>
                            </li>
                            <li className="flex items-start gap-3">
                            <span className="text-blue-700 font-bold text-lg">🏨</span>
                            <div><span className="font-semibold">AKA University City</span><br />2929 Walnut St, Philadelphia, PA 19104</div>
                            </li>
                            <li className="flex items-start gap-3">
                            <span className="text-blue-700 font-bold text-lg">🏨</span>
                            <div><span className="font-semibold">Sheraton Philadelphia University City</span><br />3549 Chestnut St, Philadelphia, PA 19104</div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-6">Maps</h2>

                    <div className="card mb-8">
                    <iframe
                        title="Amy Gutmann Hall Location"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        loading="lazy"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.8569177139765!2d-75.194!3d39.953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAmy%20Gutmann%20Hall!5e0!3m2!1sen!2sus!4v1234567890"
                    />
                    </div>
                    <div className="pt-8">
                    <p className="font-semibold text-blue-700">Getting There</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>🚊Public Transit:</strong> Amy Gutmann Hall is easily accessible via SEPTA. Take the Market-Frankford Line (Blue Line) to 34th Street Station, or regional rail to 30th Street Station (a short walk or bus ride). Several SEPTA bus routes also serve the University City area.</li>
                        <li><strong>🚗Car:</strong> From I-76 (Schuylkill Expressway), take the University City exit. Parking is available at the Penn parking garages nearby. Visitor parking is available at the Walnut Street Garage.</li>
                        <li><strong>✈️Air:</strong> Philadelphia International Airport (PHL) is approximately 20 minutes from campus. SEPTA Regional Rail's Airport Line runs directly to 30th Street Station.</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
        );
};

export default Directions;
