import React from "react";

export default function App() {
    return (
        <div className="font-sans bg-gray-50">
            {/* Hero Section */}
            <section className="text-center py-20 px-5 bg-gradient-to-br from-indigo-500 to-cyan-400 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-3">AppEase</h1>
                <p className="text-lg md:text-xl mb-8">
                    Organize Your Life, One Tap Away
                </p>
                <div>
                    <a
                        href="#appstore"
                        className="inline-block m-2 px-6 py-3 bg-black text-white rounded-md font-bold hover:opacity-90 transition"
                    >
                        Download on App Store
                    </a>
                    <a
                        href="#playstore"
                        className="inline-block m-2 px-6 py-3 bg-green-600 text-white rounded-md font-bold hover:bg-green-700 transition"
                    >
                        Get it on Google Play
                    </a>
                </div>
                <div className="mt-10">
                    <img
                        src="https://via.placeholder.com/250x500"
                        alt="App Mockup"
                        className="rounded-2xl shadow-xl mx-auto"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-5 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {[
                        {
                            title: "Smart Reminders",
                            desc: "Never miss important tasks with intelligent alerts.",
                        },
                        {
                            title: "Daily Planner",
                            desc: "Plan your day efficiently and stay organized.",
                        },
                        {
                            title: "Progress Tracking",
                            desc: "Track goals and visualize your achievements.",
                        },
                        {
                            title: "Notifications",
                            desc: "Stay on top of deadlines with instant updates.",
                        },
                    ].map((f, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                        >
                            <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Screenshots Section */}
            <section className="py-16 px-5 bg-indigo-50 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold">App Screenshots</h2>
                <div className="flex justify-center flex-wrap gap-6 mt-8">
                    <img
                        src="https://via.placeholder.com/200x400"
                        alt="Screenshot 1"
                        className="rounded-xl"
                    />
                    <img
                        src="https://via.placeholder.com/200x400"
                        alt="Screenshot 2"
                        className="rounded-xl"
                    />
                    <img
                        src="https://via.placeholder.com/200x400"
                        alt="Screenshot 3"
                        className="rounded-xl"
                    />
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-5 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Loved by Our Users
                </h2>
                <p className="text-lg mt-4">⭐ 4.8/5 from 2,000+ users</p>
                <blockquote className="mt-8 italic max-w-xl mx-auto">
                    “AppEase keeps me on track every day!” – Happy User
                </blockquote>
            </section>

            {/* Secondary CTA */}
            <section className="py-16 px-5 text-center bg-gray-100">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Download AppEase Now
                </h2>
                <div className="mt-6">
                    <a
                        href="#appstore"
                        className="inline-block m-2 px-6 py-3 bg-black text-white rounded-md font-bold hover:opacity-90 transition"
                    >
                        Download on App Store
                    </a>
                    <a
                        href="#playstore"
                        className="inline-block m-2 px-6 py-3 bg-green-600 text-white rounded-md font-bold hover:bg-green-700 transition"
                    >
                        Get it on Google Play
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-6">
                <p>© 2025 AppEase. All rights reserved.</p>
                <div className="mt-3 flex justify-center gap-4">
                    <a href="#about" className="hover:text-indigo-400">
                        About
                    </a>
                    <a href="#privacy" className="hover:text-indigo-400">
                        Privacy
                    </a>
                    <a href="#terms" className="hover:text-indigo-400">
                        Terms
                    </a>
                    <a href="#contact" className="hover:text-indigo-400">
                        Contact
                    </a>
                </div>
            </footer>
        </div>
    );
}
