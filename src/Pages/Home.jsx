import React, { useEffect, useState } from 'react';
import { PostCard } from '../components';
import appwriteService from '../appwrite/Config';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        appwriteService.getAllPost().then((response) => {
            if (response) {
                setPosts(response.documents);
            }
        });
    }, [userData]);

    const displayedPosts = posts.slice(0, 6);

    if (posts.length === 0) {
        return (
            <div className="relative flex size-full min-h-screen flex-col bg-blue-50 dark:bg-[#000000] group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="gap-1 px-6 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[920px] flex-1">
                        <div className="@container">
                            <div className="@[480px]:p-4">
                                <div
                                    className="flex min-h-[270px] sm:min-h-[330px] md:min-h-[400px] lg:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10 rounded-xl dark:bg-gray-900"
                                    style={{
                                        backgroundImage:
                                            'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/afcb6a04-a3dd-4087-8d55-509c06684213.png")',
                                    }}
                                >
                                    <div className="flex flex-col gap-2 text-left">
                                        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] font-sans dark:text-gray-200">
                                            Welcome to Vibely
                                        </h1>
                                        <h1 className='text-lg sm:text-xl md:text-2xl lg:text-4xl text-white font-semibold font-sans'>
                                            Create & share good vibes...
                                        </h1>
                                        <h2 className="text-sm text-white sm:text-md md:text-lg lg:text-2xl font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal font-sans ">
                                            Here, you can connect with friends, discover new interests, and be a part of a community that values positivity and creativity.
                                        </h2>
                                    </div>
                                    <button className="flex w-auto text-sm lg:min-w-[84px] lg:max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-auto px-3 sm:px-6 py-2 bg-[#1980e6] text-slate-50 lg:text-2xl font-bold hover:bg-transparent border-white border-[1px] duration-700">
                                        <span className="truncate">
                                            <Link to='/add-post'
                                            className='text-sm sm:text-md md:text-lg lg:text-xl'>
                                                Add Post
                                            </Link>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                            <div className="max-w-8xl bg-white shadow-xl rounded-lg m-8  dark:bg-[#1a1b33] dark:shadow-none">
                                <div className="w-full py-8 mt-4 text-center">
                                    <div className="flex flex-wrap">
                                        <div className="p-2 w-full">
                                            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold hover:text-gray-500 dark:text-gray-200">
                                                Login to see posts
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-blue-50 dark:bg-[#000000] group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="gap-1 px-6 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[920px] flex-1">
                        <div className="@container">
                            <div className="@[480px]:p-4">
                                <div
                                    className="flex min-h-[270px] sm:min-h-[330px] md:min-h-[400px] lg:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10 rounded-xl dark:bg-gray-900"
                                    style={{
                                        backgroundImage:
                                            'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/afcb6a04-a3dd-4087-8d55-509c06684213.png")',
                                    }}
                                >
                                    <div className="flex flex-col gap-2 text-left">
                                        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] font-sans dark:text-gray-200">
                                            Welcome to Vibely
                                        </h1>
                                        <h1 className='text-lg sm:text-xl md:text-2xl lg:text-4xl text-white font-semibold font-sans'>
                                            Create & share good vibes...
                                        </h1>
                                        <h2 className="text-sm text-white sm:text-md md:text-lg lg:text-2xl font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal font-sans ">
                                            Here, you can connect with friends, discover new interests, and be a part of a community that values positivity and creativity.
                                        </h2>
                                    </div>
                                    <button className="flex w-auto text-sm lg:min-w-[84px] lg:max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-auto px-3 sm:px-6 py-2 bg-[#1980e6] text-slate-50 lg:text-2xl font-bold hover:bg-transparent border-white border-[1px] duration-700">
                                        <span className="truncate">
                                            <Link to='/add-post'
                                            className='text-sm sm:text-md md:text-lg lg:text-xl'>
                                                Add Post
                                            </Link>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-8xl bg-white shadow-xl rounded-lg my-8 p-4 sm:p-5 md:p-7 lg:p-8 dark:bg-[#1a1b33]">
                            <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center dark:text-gray-200">Our Featured Destinations</h1>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
                                {displayedPosts !== 0
                                    && (displayedPosts.map((post) => (
                                        <PostCard key={post.$id} {...post} />
                                    )))}
                            </div>
                            {displayedPosts === 0 && (
                                <div className='my-48'>
                                    <p className='text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans font-semibold dark:text-gray-200'>
                                        Share your Special moment of life
                                    </p>
                                    <p className='text-center text-md sm:text-lg md:text-xl lg:text-2xl font-sans dark:text-gray-300'>
                                        App does not have any Post...
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
