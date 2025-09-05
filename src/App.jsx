import React, { useState } from 'react';

// --- SVG Icons --- //
// Using inline SVGs to keep everything in one file and avoid external dependencies.

const AppEaseLogo = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="url(#logo-gradient)"/>
        <path d="M16 32L24 16L32 32" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 26H28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
            <linearGradient id="logo-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4F46E5"/>
                <stop offset="1" stopColor="#A855F7"/>
            </linearGradient>
        </defs>
    </svg>
);

const AppleIcon = () => (
    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.39,14.81a4.34,4.34,0,0,1-4.44,4.23,4.12,4.12,0,0,1-2-.52,4.31,4.31,0,0,1-1.9-2,4.5,4.5,0,0,1-.58-2.39,3.69,3.69,0,0,1,1.17-2.8,4.48,4.48,0,0,1,3-1.18,4.19,4.19,0,0,1,2.51.79,1.18,1.18,0,0,0,1.52-.1,1.19,1.19,0,0,0,.33-1.5,6.53,6.53,0,0,0-4.14-1.6,6.38,6.38,0,0,0-5.46,3.22,6.1,6.1,0,0,0-1.2,4.17,6.36,6.36,0,0,0,3.66,5.43,6.32,6.32,0,0,0,6.5-1.1,1.2,1.2,0,0,0,.4-1.56,1.23,1.23,0,0,0-1.65-.63Z"/>
        <path d="M15.11,3.42a4.33,4.33,0,0,1,1.86,3.46,4.2,4.2,0,0,1-1.67,3.31,1.2,1.2,0,0,0-.46,1.5,1.2,1.2,0,0,0,1.51.52A6.49,6.49,0,0,0,19,6.73,6.33,6.33,0,0,0,15.11,3.42Z"/>
    </svg>
);

const GooglePlayIcon = () => (
    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.63,2.32a2.2,2.2,0,0,0-.43,3.43L6.5,8.89,3.2,12.18,3.63,2.32M20.24,10.61,18,12,15.7,13.43l-3.34,1.93L3.2,21.84a2.2,2.2,0,0,0,2.19,0l15.28-8.82a2.19,2.19,0,0,0-.43-4.41M12.36,14.1,18,10.61,15.7,9.18,12.36,14.1m-8.73.79L6.5,11.75,10.87,12,6.5,14.89Z"/>
    </svg>
);

const FeatureIcon = ({ icon }) => (
    <div className="bg-indigo-100 text-indigo-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
    </div>
);

const SmartReminderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>;
const DailyPlannerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 14 2 2 4-4"/></svg>;
const ProgressTrackingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>;

const StarIcon = ({ isFilled }) => (
    <svg className={`w-5 h-5 ${isFilled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

// --- Components for each section --- //

const HeroSection = () => (
    <header className="bg-white">
        <div className="container mx-auto px-6 py-16 text-center">
            <div className="mx-auto max-w-lg">
                <AppEaseLogo />
                <h1 className="text-4xl font-bold text-gray-800 md:text-5xl mt-4">Organize Your Life, One Tap Away</h1>
                <p className="mt-6 text-gray-600">AppEase simplifies your daily routines with smart reminders, an intuitive planner, and progress tracking to help you achieve your goals.</p>
                <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
                    <a href="#" className="flex items-center justify-center px-5 py-3 text-white bg-black rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
                        <AppleIcon />
                        <div>
                            <p className="text-xs">Download on the</p>
                            <p className="text-lg font-semibold">App Store</p>
                        </div>
                    </a>
                    <a href="#" className="flex items-center justify-center px-5 py-3 text-white bg-black rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
                        <GooglePlayIcon />
                        <div>
                            <p className="text-xs">GET IT ON</p>
                            <p className="text-lg font-semibold">Google Play</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex justify-center mt-12">
                <div className="bg-gray-800 border-8 border-gray-900 rounded-3xl shadow-xl overflow-hidden w-64 h-auto">
                    <img src="https://placehold.co/300x600/7c3aed/ffffff?text=AppEase\nDashboard" alt="AppEase Dashboard Screenshot" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </header>
);

const FeaturesSection = () => (
    <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800">Features Designed For You</h2>
            <p className="mt-4 text-center text-gray-600">Everything you need to stay organized and productive.</p>
            <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                    <FeatureIcon icon={<SmartReminderIcon />} />
                    <h3 className="text-xl font-semibold text-gray-800">Smart Reminders</h3>
                    <p className="mt-2 text-gray-600">Never miss a deadline with intelligent reminders that adapt to your schedule.</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                    <FeatureIcon icon={<DailyPlannerIcon />} />
                    <h3 className="text-xl font-semibold text-gray-800">Daily Planner</h3>
                    <p className="mt-2 text-gray-600">Organize your tasks, events, and notes in one unified view for ultimate clarity.</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                    <FeatureIcon icon={<ProgressTrackingIcon />} />
                    <h3 className="text-xl font-semibold text-gray-800">Progress Tracking</h3>
                    <p className="mt-2 text-gray-600">Visualize your accomplishments with beautiful charts and stay motivated.</p>
                </div>
            </div>
        </div>
    </section>
);

const GallerySection = () => {
    const screenshots = [
        { src: "https://placehold.co/300x600/a855f7/ffffff?text=Reminders+List", alt: "App Reminders List" },
        { src: "https://placehold.co/300x600/4f46e5/ffffff?text=Analytics+View", alt: "App Analytics View" },
        { src: "https://placehold.co/300x600/10b981/ffffff?text=Planner+View", alt: "App Planner View" },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? screenshots.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === screenshots.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section id="gallery" className="bg-white py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800">Take a Look Inside</h2>
                <p className="mt-4 text-center text-gray-600">A clean and intuitive interface you'll love to use.</p>
                <div className="mt-12 relative max-w-lg mx-auto h-[500px]">
                    {screenshots.map((screenshot, index) => (
                        <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="flex justify-center items-center h-full">
                                <div className="bg-gray-800 border-8 border-gray-900 rounded-3xl shadow-xl overflow-hidden w-64 h-auto">
                                    <img src={screenshot.src} alt={screenshot.alt} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    ))}
                    <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
                <div className="flex justify-center mt-4 space-x-2">
                    {screenshots.map((_, index) => (
                        <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-indigo-500' : 'bg-gray-300'}`}></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => (
    <section id="testimonials" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800">Loved by Thousands of Users</h2>
            <div className="flex justify-center items-center mt-4 space-x-1">
                <StarIcon isFilled={true} /><StarIcon isFilled={true} /><StarIcon isFilled={true} /><StarIcon isFilled={true} /><StarIcon isFilled={true} />
                <p className="ml-2 text-gray-600">4.8 / 5 from 12,000+ ratings</p>
            </div>
            <div className="grid gap-8 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-gray-600 italic">"AppEase keeps me on track every day! It's the simplest and most powerful productivity app I've ever used."</p>
                    <p className="mt-4 font-semibold text-gray-800">- Sarah J., Freelancer</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-gray-600 italic">"The progress tracking feature is a game-changer. Seeing my accomplishments visually keeps me motivated to do more."</p>
                    <p className="mt-4 font-semibold text-gray-800">- Mike R., Student</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-gray-600 italic">"I finally found an app that isn't bloated with unnecessary features. It does exactly what I need, perfectly."</p>
                    <p className="mt-4 font-semibold text-gray-800">- Emily C., Project Manager</p>
                </div>
            </div>
        </div>
    </section>
);

const CtaSection = () => (
    <section id="cta" className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">Start Organizing Your Life Today</h2>
            <p className="mt-4 max-w-2xl mx-auto">Download AppEase now and take the first step towards a more productive and stress-free life. Available on iOS and Android.</p>
            <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
                <a href="#" className="flex items-center justify-center px-5 py-3 text-gray-800 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                    <AppleIcon />
                    <div>
                        <p className="text-xs">Download on the</p>
                        <p className="text-lg font-semibold">App Store</p>
                    </div>
                </a>
                <a href="#" className="flex items-center justify-center px-5 py-3 text-gray-800 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                    <GooglePlayIcon />
                    <div>
                        <p className="text-xs">GET IT ON</p>
                        <p className="text-lg font-semibold">Google Play</p>
                    </div>
                </a>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col items-center justify-between sm:flex-row">
                <div className="flex items-center space-x-2">
                    <AppEaseLogo />
                    <span className="font-bold text-xl text-white">AppEase</span>
                </div>
                <div className="flex mt-4 sm:mt-0 space-x-6">
                    <a href="#" className="hover:text-white">About</a>
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms</a>
                    <a href="#" className="hover:text-white">Contact</a>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center justify-between sm:flex-row">
                <p className="text-sm">&copy; 2025 AppEase. All Rights Reserved.</p>
                <div className="flex mt-4 sm:mt-0 space-x-4">
                    {/* Social Icons */}
                    <a href="#" className="hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"/></svg></a>
                    <a href="#" className="hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.634 4.208 3.801 4.649-.62.167-1.282.226-1.961.226-.305 0-.6-.03-1.05-.098.631 1.953 2.445 3.377 4.604 3.417-1.621 1.274-3.664 2.032-5.89 2.032-.383 0-.76-.022-1.13-.065 2.094 1.346 4.59 2.123 7.24 2.123 8.683 0 13.44-7.186 13.44-13.44 0-.204-.005-.407-.013-.61a9.618 9.618 0 002.356-2.44z"/></svg></a>
                    <a href="#" className="hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z"/></svg></a>
                </div>
            </div>
        </div>
    </footer>
);


// --- Main App Component --- //

export default function App() {
    return (
        <div className="bg-white font-sans text-gray-700">
            <main>
                <HeroSection />
                <FeaturesSection />
                <GallerySection />
                <TestimonialsSection />
                <CtaSection />
            </main>
            <Footer />
        </div>
    );
}
