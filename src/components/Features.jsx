import React from 'react';
import {Personalized, Privacy, GeoTagging, Community, Content, ImageEditor, VideoEditor, MobileApp, MediaLibrary, image, AnalyticsDashboard, LiveStreaming, media} from '.'

const Features = () => {
    return (
        <>
            <div class="feature-bg py-20 bg-blue-50 dark:bg-black">
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 dark:text-slate-200">Explore What Makes Vibely Unique</h2>
                    <p class="text-xs sm:text-sm md:text-[12px] lg:text-lg text-black dark:text-slate-200">Discover the innovative features that empower creators, influencers, and everyday users to connect and share experiences like never before.</p>
                </div>
            </div>

            <main class="mx-auto px-4 py-10 dark:bg-black">
                <section class="mb-10">
                    <h2 class="text-[12px] sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-6 dark:text-slate-200">Our Key Features</h2>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center dark:bg-[#1a1b33]">
                            <img src={Community} alt="Community Building" class="feature-icon mb-4 dark:rounded-xl" />
                            <h3 class="text-base sm:text-[12px] md:text-lg lg:text-xl font-semibold text-gray-800 mb-2 dark:text-sky-400">Community Building</h3>
                            <p class="text-gray-700 dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg">Join vibrant communities that connect you with people who share your interests, hobbies, and passions. Vibely's community tools allow you to engage in meaningful discussions and collaborations.</p>
                        </div>
                        <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center dark:bg-[#1a1b33]">
                            <img src={Content} alt="Content Creation" class="feature-icon mb-4 dark:rounded-xl" />
                            <h3 class="text-base sm:text-[12px] md:text-lg lg:text-xl font-semibold text-gray-800 mb-2  dark:text-sky-400">Advanced Content Creation</h3>
                            <p class="text-gray-700  dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg">Create stunning content with Vibely's robust suite of tools designed for video, image, and text editing. Elevate your posts with unique effects, filters, and layouts tailored to showcase your creativity.</p>
                        </div>
                        <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center dark:bg-[#1a1b33]">
                            <img src={Personalized} alt="Personalization" class="feature-icon mb-4 dark:rounded-xl" />
                            <h3 class="text-base sm:text-[12px] md:text-lg lg:text-xl font-semibold text-gray-800 mb-2 dark:text-sky-400">Personalized Experience</h3>
                            <p class="text-gray-700 dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg">Enjoy a tailored experience with customizable feeds, content recommendations, and personalized settings that adapt to your preferences. Vibely learns from your interactions to deliver what matters most to you.</p>
                        </div>
                        <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center dark:bg-[#1a1b33]">
                            <img src={image} alt="Cloud Syncing" class="feature-icon mb-4 md:w-60 md:h-60 rounded-xl w-36 h-36 sm:w-44 sm:h-44" />
                            <h3 class="text-base sm:text-[12px] md:text-lg lg:text-xl font-semibold text-gray-800 mb-2 dark:text-sky-400">Seamless Cloud Syncing</h3>
                            <p class="text-gray-700 dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg">Access your content anytime, anywhere with Vibely's cloud syncing feature. Save drafts, manage your media library, and continue your creative journey across multiple devices without missing a beat.</p>
                        </div>
                        <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center dark:bg-[#1a1b33]">
                            <img src={MobileApp} alt="Mobile App" class="feature-icon mb-4 md:w-60 md:h-60 rounded-xl w-36 h-36 sm:w-44 sm:h-44" />
                            <h3 class="text-base sm:text-[12px] md:text-lg lg:text-xl font-semibold text-gray-800 mb-2 dark:text-sky-400">Intuitive Mobile App</h3>
                            <p class="text-gray-700 dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg">Stay connected with Vibely's mobile app, designed for ease of use and on-the-go access. Experience the full power of Vibely in the palm of your hand, with features optimized for mobile interaction.</p>
                        </div>
                        <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center dark:bg-[#1a1b33]">
                            <img src={Privacy} alt="Privacy Control" class="feature-icon mb-4 md:w-60 md:h-60 rounded-xl w-36 h-36 sm:w-44 sm:h-44" />
                            <h3 class="text-base sm:text-[12px] md:text-lg lg:text-xl font-semibold text-gray-800 mb-2 dark:text-sky-400">Robust Privacy Controls</h3>
                            <p class="text-gray-700 dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg">Your privacy matters. Vibely offers comprehensive privacy settings that allow you to control who sees your content and how your data is used. Trust Vibely to protect your personal information.</p>
                        </div>
                    </div>
                </section>

                <section class="bg-white rounded-lg p-6 shadow-lg mb-10 dark:bg-[#1a1b33]">
                    <h2 class="text-[12px] sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 dark:text-slate-200">Advanced Tools for Creators</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="flex items-start">
                            <img src={VideoEditor} alt="Video Editor" class="feature-icon mr-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl" />
                            <div>
                                <h3 class="text-base sm:text-[12px] md:text-lg lg:text-xl font-semibold text-gray-800 mb-2 dark:text-sky-400">Video Editor</h3>
                                <p class="text-gray-700 dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg">Edit your videos with ease using our professional-grade video editing tools. Trim, merge, add transitions, and create captivating content that stands out.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <img src={ImageEditor} alt="Image Editor" class="feature-icon mr-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl" />
                            <div>
                                <h3 class="text-base sm:text-[12px] md:text-lg lg:text-xl font-semibold text-gray-800 mb-2 dark:text-sky-400">Image Editor</h3>
                                <p class="text-gray-700 dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg">Enhance your images with our comprehensive image editing suite. Use filters, overlays, and other creative effects to bring your photos to life.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <img src={AnalyticsDashboard} alt="Analytics Dashboard" class="feature-icon mr-4  w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl" />
                            <div>
                                <h3 class="text-base sm:text-[12px] md:text-lg lg:text-xl font-semibold text-gray-800 mb-2 dark:text-sky-400">Analytics Dashboard</h3>
                                <p class="text-gray-700 dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg">Track your content's performance with detailed analytics. Gain insights into your audience, engagement, and trends to make informed decisions.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <img src={MediaLibrary} alt="Media Library" class="feature-icon mr-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl" />
                            <div>
                                <h3 class="text-base sm:text-[12px] md:text-lg lg:text-xl font-semibold text-gray-800 mb-2 dark:text-sky-400">Media Library</h3>
                                <p class="text-gray-700 dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg">Organize your media assets effortlessly with Vibely's media library. Store, sort, and access your files whenever you need them.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <img src={GeoTagging} alt="Geo-Tagging" class="feature-icon mr-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl" />
                            <div>
                                <h3 class="text-base sm:text-[12px] md:text-lg lg:text-xl font-semibold text-gray-800 mb-2 dark:text-sky-400">Geo-Tagging</h3>
                                <p class="text-gray-700 dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg">Add location tags to your content to reach local audiences and connect with users in your vicinity. Geo-tagging helps increase engagement and discoverability.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <img src={LiveStreaming} alt="Live Streaming" class="feature-icon mr-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl" />
                            <div>
                                <h3 class="text-base sm:text-[12px] md:text-lg lg:text-xl font-semibold text-gray-800 mb-2 dark:text-sky-400">Live Streaming</h3>
                                <p class="text-gray-700 dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg">Engage your audience in real-time with Vibely's live streaming capabilities. Host live sessions, Q&As, and events to foster direct interaction with your followers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-white rounded-lg p-6 shadow-lg mb-10 dark:bg-[#1a1b33]">
                    <h2 class="text-[12px] sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 dark:text-slate-200">Collaboration and Community Features</h2>
                    <ul class="list-disc list-inside text-gray-700 space-y-4">
                        <li className='dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg'>
                            <span class="font-semibold text-gray-800 dark:text-sky-400">Groups and Forums:</span> Connect with like-minded individuals by joining groups and participating in forums. Share knowledge, ask questions, and collaborate on projects with your community.
                        </li>
                        <li className='dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg'>
                            <span class="font-semibold text-gray-800 dark:text-sky-400">Collaborative Projects:</span> Work on collaborative projects with fellow creators and community members. Vibely provides tools for teamwork, allowing multiple users to contribute to content creation seamlessly.
                        </li>
                        <li className='dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg'>
                            <span class="font-semibold text-gray-800 dark:text-sky-400">Mentorship Programs:</span> Benefit from mentorship opportunities by connecting with experienced creators willing to share their expertise. Vibely's mentorship programs help users learn and grow in their creative journey.
                        </li>
                        <li className='dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg'>
                            <span class="font-semibold text-gray-800 dark:text-sky-400">Event Management:</span> Organize and promote events with Vibely's event management features. Plan workshops, webinars, and meetups to engage with your community and build lasting connections.
                        </li>
                        <li className='dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg'>
                            <span class="font-semibold text-gray-800 dark:text-sky-400">Feedback and Reviews:</span> Get feedback on your content through reviews and ratings. Vibely encourages constructive criticism to help users improve and refine their creative outputs.
                        </li>
                    </ul>
                </section>

                <section class="bg-white rounded-lg p-6 shadow-lg mb-10 dark:bg-[#1a1b33]">
                    <h2 class="text-[12px] sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 dark:text-slate-200 text-justify">Security and Support</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="text-base sm:text-[12px] md:text-lg lg:text-xl font-semibold text-gray-800 mb-2 dark:text-slate-200 text-justify">Security Features</h3>
                            <ul class="list-disc list-inside text-gray-700 space-y-4">
                                <li className='dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg'>
                                    <span class="font-semibold text-gray-800 dark:text-sky-400">End-to-End Encryption:</span> Ensure your communications are private with end-to-end encryption, protecting your messages and data from unauthorized access.
                                </li>
                                <li className='dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg'>
                                    <span class="font-semibold text-gray-800 dark:text-sky-400">Two-Factor Authentication:</span> Add an extra layer of security to your account with two-factor authentication. Keep your account safe from unauthorized access.
                                </li>
                                <li className='dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg'>
                                    <span class="font-semibold text-gray-800 dark:text-sky-400">Data Protection:</span> Vibely is committed to safeguarding your data. Our platform complies with data protection regulations, ensuring your personal information is secure.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-base sm:text-[12px] md:text-lg lg:text-xl font-semibold text-gray-800 mb-2 dark:text-slate-200">Support Services</h3>
                            <ul class="list-disc list-inside text-gray-700 space-y-4">
                                <li className='dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg'>
                                    <span class="font-semibold text-gray-800 dark:text-sky-400">24/7 Customer Support:</span> Our support team is available around the clock to assist you with any issues or inquiries you may have. Reach out to us anytime for prompt assistance.
                                </li>
                                <li className='dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg'>
                                    <span class="font-semibold text-gray-800 dark:text-sky-400">Comprehensive Help Center:</span> Access a wealth of resources in our Help Center, including FAQs, tutorials, and guides. Find answers to common questions and learn how to make the most of Vibely.
                                </li>
                                <li className='dark:text-slate-200 text-justify text-sm sm:text-base md:text-[12px] lg:text-lg'>
                                    <span class="font-semibold text-gray-800 dark:text-sky-400">Community Support:</span> Engage with our community for additional support. Share your experiences, ask questions, and get help from fellow Vibely users who are eager to assist.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}
export default Features;