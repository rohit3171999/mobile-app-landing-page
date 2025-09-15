/*
* Description: Single card representing one app feature.
* Purpose: Encapsulates UI for features like Smart Reminders.
* */
function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Icon Container */}
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-500 dark:text-indigo-400 mb-5">
        {icon}
      </div>
      {/* Feature Title */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      {/* Feature Description */}
      <p className="text-base text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;