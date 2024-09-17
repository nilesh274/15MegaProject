import React from 'react';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
    return (
        <>
            <div className="mx-auto px-5 py-10 flex flex-col lg:flex-row dark:bg-[#000000]">

                <aside className="bg-white w-full lg:w-1/4 border rounded-lg p-6 shadow-lg mb-4 lg:mb-0 lg:mr-4 dark:bg-[#1a1b33] dark:border-none">
                    <h2 className="text-sm md:text-lg lg:text-xl font-semibold mb-2 md:mb-4 dark:text-slate-200">Help Topics</h2>
                    <ul className="space-y-0 md:space-y-4">
                        <li>
                            <Link to='/' className="text-xs sm:text-sm md:text-lg text-blue-600 hover:text-blue-800">Account & Profile</Link>
                        </li>
                        <li>
                            <Link to='/' className="text-xs sm:text-sm md:text-lg text-blue-600 hover:text-blue-800">Content Creation</Link>
                        </li>
                        <li>
                            <Link to='/' className="text-xs sm:text-sm md:text-lg text-blue-600 hover:text-blue-800">Privacy & Security</Link>
                        </li>
                        <li>
                            <Link to='/' className="text-xs sm:text-sm md:text-lg text-blue-600 hover:text-blue-800">Community Guidelines</Link>
                        </li>
                        <li>
                            <Link to='/' className="text-xs sm:text-sm md:text-lg text-blue-600 hover:text-blue-800">Troubleshooting</Link>
                        </li>
                    </ul>
                </aside>

                <main className="flex-1 bg-white border rounded-lg p-6 shadow-lg dark:bg-[#1a1b33] dark:border-none">
                    <div className="relative mb-10">
                        <input type="text" placeholder="Search help articles..." className="text-sm sm:text-md md:text-lg lg:text-xl w-full border-2 border-gray-300 rounded-lg py-1 md:py-2 px-4 focus:outline-none focus:border-blue-500 transition-colors dark:bg-transparent dark:text-slate-200" />
                        <button className="absolute right-2 top-1 md:top-2 text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-7 sm:w-5 sm:h-8 md:w-6 md:h-9">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m-3.3 1.35a7 7 0 100-14 7 7 0 000 14z" />
                            </svg>
                        </button>
                    </div>

                    <section id="account" className="mb-10">
                        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 dark:text-slate-200">Account & Profile</h2>
                        <div className="space-y-4">
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <h3 className="font-semibold text-base md:text-[12px] lg:text-lg dark:text-sky-400">How do I create a Vibely account?</h3>
                                <p className="text-gray-700 mt-2 dark:text-slate-200 text-sm sm:text-base md:text-[12px] lg:text-lg">To create a Vibely account, go to the <a to="/" className="text-blue-600 hover:text-blue-800">signup page</a>, enter your email, and follow the instructions. You can also sign up using Google or Facebook.</p>
                            </div>
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <h3 className="font-semibold text-base md:text-[12px] lg:text-lg dark:text-sky-400">How can I reset my password?</h3>
                                <p className="text-gray-700 mt-2 dark:text-slate-200 text-sm sm:text-base md:text-[12px] lg:text-lg">To reset your password, click on <a to="/" className="text-blue-600 hover:text-blue-800">Forgot Password</a> at the login page and follow the instructions sent to your registered email.</p>
                            </div>
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <h3 className="font-semibold text-base md:text-[12px] lg:text-lg dark:text-sky-400">How to update my profile information?</h3>
                                <p className="text-gray-700 mt-2 dark:text-slate-200 text-sm sm:text-base md:text-[12px] lg:text-lg">You can update your profile information by navigating to your profile page and clicking on the 'Edit Profile' button.</p>
                            </div>
                        </div>
                    </section>

                    <section id="content" className="mb-10">
                        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 dark:text-slate-200">Content Creation</h2>
                        <div className="space-y-4">
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <h3 className="font-semibold text-base md:text-[12px] lg:text-lg dark:text-sky-400">How do I post on Vibely?</h3>
                                <p className="text-gray-700 mt-2 dark:text-slate-200 text-sm sm:text-base md:text-[12px] lg:text-lg">To post on Vibely, click on the 'Create Post' button at the top of your feed, then choose the type of content you want to upload, such as text, images, or videos.</p>
                            </div>
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <h3 className="font-semibold text-base md:text-[12px] lg:text-lg dark:text-sky-400">What types of content can I create?</h3>
                                <p className="text-gray-700 mt-2 dark:text-slate-200 text-sm sm:text-base md:text-[12px] lg:text-lg">Vibely supports various content types, including text posts, images, videos, and interactive polls.</p>
                            </div>
                        </div>
                    </section>

                    <section id="privacy" className="mb-10">
                        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 dark:text-slate-200">Privacy & Security</h2>
                        <div className="space-y-4">
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <h3 className="font-semibold text-base md:text-[12px] lg:text-lg dark:text-sky-400">How do I change my privacy settings?</h3>
                                <p className="text-gray-700 mt-2 dark:text-slate-200 text-sm sm:text-base md:text-[12px] lg:text-lg">To change your privacy settings, go to the settings page and click on 'Privacy'. You can adjust who can see your posts, who can send you messages, and more.</p>
                            </div>
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <h3 className="font-semibold text-base md:text-[12px] lg:text-lg dark:text-sky-400">How can I report a privacy violation?</h3>
                                <p className="text-gray-700 mt-2 dark:text-slate-200 text-sm sm:text-base md:text-[12px] lg:text-lg">To report a privacy violation, use the 'Report' button on the offending content or contact our support team through the <a to="/" className="text-blue-600 hover:text-blue-800">contact form</a>.</p>
                            </div>
                        </div>
                    </section>

                    <section id="community" className="mb-10">
                        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 dark:text-slate-200">Community Guidelines</h2>
                        <div className="space-y-4">
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <h3 className="font-semibold text-base md:text-[12px] lg:text-lg dark:text-sky-400">What are Vibely's community guidelines?</h3>
                                <p className="text-gray-700 mt-2 dark:text-slate-200 text-sm sm:text-base md:text-[12px] lg:text-lg">Vibely's community guidelines are designed to ensure a safe and welcoming environment for all users. You can read them in detail on our <a to="/" className="text-blue-600 hover:text-blue-800">guidelines page</a>.</p>
                            </div>
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <h3 className="font-semibold text-base md:text-[12px] lg:text-lg dark:text-sky-400">How can I report inappropriate content?</h3>
                                <p className="text-gray-700 mt-2 dark:text-slate-200 text-sm sm:text-base md:text-[12px] lg:text-lg">To report inappropriate content, click the 'Report' button found on the post, and choose the reason for reporting. Our team will review the content promptly.</p>
                            </div>
                        </div>
                    </section>

                    <section id="troubleshooting" className="mb-10">
                        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 dark:text-slate-200">Troubleshooting</h2>
                        <div className="space-y-4">
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <h3 className="font-semibold text-base md:text-[12px] lg:text-lg dark:text-sky-400">Why can't I log in to my account?</h3>
                                <p className="text-gray-700 mt-2 dark:text-slate-200 text-sm sm:text-base md:text-[12px] lg:text-lg">If you're having trouble logging in, ensure you're using the correct email and password. If the problem persists, try resetting your password or <a to="/" className="text-blue-600 hover:text-blue-800">contact support</a>.</p>
                            </div>
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <h3 className="font-semibold text-base md:text-[12px] lg:text-lg dark:text-sky-400">How do I report a bug or issue?</h3>
                                <p className="text-gray-700 mt-2 dark:text-slate-200 text-sm sm:text-base md:text-[12px] lg:text-lg">To report a bug or issue, visit our <a to="/" className="text-blue-600 hover:text-blue-800">bug report page</a> and provide as much detail as possible. Our team will work to resolve it quickly.</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
export default HelpCenter;