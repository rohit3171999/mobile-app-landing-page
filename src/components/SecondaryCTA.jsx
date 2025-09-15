function SecondaryCTA(){
    return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Download the app today and take the first step towards a more
            organized and productive life. Available on all your devices.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#download-app-store"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900"
            >
              <svg
                className="w-5 h-5 mr-2 -ml-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C39.2 141.1 0 183.2 0 241.2c0 61.6 31.5 112.9 79.2 152.8 23.6 19.5 50.7 31.8 82.8 31.8 25.3 0 47.9-8.8 65.1-24.3-16.6-9.3-34.4-29.4-34.4-55.8 0-28.2 21.5-50.7 51.7-50.7 31.5 0 56.5 25.9 56.5 56.5 0 35.7-23.6 58.3-55.6 58.3 32.2 0 61.2-18.2 83.2-42.5 21.2-23.6 34.4-55.6 34.4-88.6zM232.4 51.2c13.2-15.9 21.6-36.4 21.6-51.2h-64c-15.9 16.6-24.4 36.4-21.6 51.2h64z"
                ></path>
              </svg>
              App Store
            </a>
            <a
              href="#download-play-store"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                className="w-5 h-5 mr-2 -ml-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google-play"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M325.3 234.3L104.6 13l280.8 161.2-59.7 30.1zM479.8 287.4L104.6 499l280.8-161.2-59.7-30.1zM104.6 13L479.8 287.4 104.6 499z"
                ></path>
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SecondaryCTA;