/*
* Description: Highlights app’s main features in a clean grid.
* Purpose: Show value proposition with visual + text.
* */

function FeatureSection() {
    return(

        <section>
            <div>
                {/*section header*/}
                <div className="text-center mb-12 mt-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                        Everything you need, all in one place..

                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Our app is packed with powerful feature to help you boost productivity and stay organised..

                    </p>
                </div>
                {/*feature grid*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {/*faeture 1*/}
                    <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-500 dark:text-indigo-400 mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l-3 3m3-3l3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.33-2.33 3 3 0 013.75 5.25" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Real time cloud Sync...
                        </h3>
                        <p className="text-base text-gray-600  dark:text-gray-500">
                            keep your data sync across all devices in real-time.. Never loose your progress, whether you are your phone , tablet, or desktop.
                        </p>
                    </div>
                    {/*faeture 2*/}
                    <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-500 dark:text-indigo-400 mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Cross Platform activity...
                        </h3>
                        <p className="text-base text-gray-600  dark:text-gray-500">
                            Designed for both iOS and Android, our app provides a seamless experience no matter what device you use.
                        </p>
                    </div>
                    {/*faeture 3*/}
                    <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-500 dark:text-indigo-400 mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            secure by design...
                        </h3>
                        <p className="text-base text-gray-600  dark:text-gray-500">
                            With end to end encryption, your data is your own, We prioritize your privacy and security above all else.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FeatureSection;