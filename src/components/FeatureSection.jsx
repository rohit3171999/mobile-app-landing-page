/*
* Description: Highlights app’s main features in a clean grid.
* Purpose: Show value proposition with visual + text.
* */

import FeatureCard from "./FaetureCard";

// An array of feature objects for easy mapping and maintenance.
// I've used free icons from Heroicons (https://heroicons.com/)
const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a11.999 11.999 0 01-2.25 0m2.25 0a11.999 11.999 0 002.25 0m-4.5 0a11.999 11.999 0 01-2.25 0m2.25 0a11.999 11.999 0 002.25 0m-2.25 0a6.013 6.013 0 01-1.5 0m1.5 0a6.013 6.013 0 001.5 0m0 0a6.013 6.013 0 011.5 0m-1.5 0a6.013 6.013 0 00-1.5 0" />
      </svg>
    ),
    title: "Smart Reminders",
    description: "Never miss a deadline with intelligent reminders that adapt to your workflow and priorities.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l-3 3m3-3l3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.33-2.33 3 3 0 013.75 5.25" />
      </svg>
    ),
    title: "Real-Time Cloud Sync",
    description: "Keep your data synced across all devices. Never lose progress, whether on your phone, tablet, or desktop.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Secure By Design",
    description: "With end-to-end encryption, your data is your own. We prioritize your privacy and security above all else.",
  },
];

function FeatureSection() {
    return(
        <section className="bg-white dark:bg-gray-800 py-16 sm:py-24">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                        Everything You Need, All in One Place
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Our app is packed with powerful features to help you boost productivity and stay organized.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default FeatureSection;