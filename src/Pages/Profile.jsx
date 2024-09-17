import React, { useEffect, useState } from 'react';
import { userImage } from '../components/index'
import appwriteService from '../appwrite/Config'
import { ProfilePost } from '../components';
import authService from '../appwrite/Auth';

const Profile = () => {
    const [posts, setPosts] = useState([]);
    const [followersDetails, setFollowersDetails] = useState([]);
    const [followingDetails, setFollowingDetails] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleFollow, setIsVisibleFollow] = useState(false);
    const [follower, setFollower] = useState(0);
    const [following, setFollowing] = useState(0);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const getcurrentuser = async () => {
            const user = await authService.getCurrentUser();
            setUserData(user)
        }
        getcurrentuser();
    }, [])

    useEffect(() => {
        console.log("User data in Profile:", userData);
        if (userData?.$id) {
            const getPost = async () => {
                await appwriteService.getAllPosts().then((posts) => {
                    if (posts) {
                        setPosts(posts.documents);
                    }
                });
            };
            getPost();
        }
    }, [userData?.$id]);

    useEffect(() => {
        console.log("User data in Profile for followers:", userData);
        if (userData?.$id) {
            const getUser = async () => {
                const userDetail = await appwriteService.getUserDetails(userData?.$id);
                setFollower(userDetail.follower.length);
                setFollowing(userDetail.following.length);
            };
            getUser();
        }
    }, [userData?.$id]);

    const userPost = posts.filter(post => post.userId === userData?.$id);
    const postCnt = userPost.length;

    const handleFollower = async () => {
        if (userData?.$id) {
            let User = await appwriteService.getUserDetails(userData?.$id);
            if (User) {
                const followerDetailsPromises = User.follower.map(async (followerId) => {
                    return await appwriteService.getAuthUser(followerId);
                });
                const followers = await Promise.all(followerDetailsPromises);
                setFollowersDetails(followers);
            }
            setIsVisible(!isVisible);
        }
    };

    const handlefollowing = async () => {
        if (userData?.$id) {
            let User = await appwriteService.getUserDetails(userData?.$id);
            if (User) {
                const followerDetailsPromises = User.following.map(async (followerId) => {
                    return await appwriteService.getAuthUser(followerId);
                });
                const follow = await Promise.all(followerDetailsPromises);
                setFollowingDetails(follow);
            }
            setIsVisibleFollow(!isVisibleFollow);
        }
    };

    return (
        <div className="dark:bg-[#000000] p-5 sm:p-7 md:p-8 lg:p-10">
            <div className='shadow-2xl p-10 border-2 rounded-2xl dark:bg-[#1a1b33] dark:border-none'>
                <div className='mt-7 ml-8 mb-14 w-1/3'>
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-sans dark:text-slate-200'>Profile</p>
                </div>
                <div className='flex mr-auto flex-wrap lg:gap-96 justify-center items-center'>
                    <div className='flex gap-5 lg:gap-24 items-center pb-10 mr-auto mb-7'>
                        <img src={userImage} alt="Profile Photo" className='rounded-full h-[45px] w-[45px] sm:h-[55px] sm:w-[55px] md:h-[65px] md:w-[65px] lg:h-[75px] lg:w-[75px] hover:scale-125 duration-1000 dark:hover:scale-110' />
                        <div>
                            <p className='text-[12px] sm:text-lg md:text-xl lg:text-2xl font-bold font-sans dark:text-slate-200'>{userData?.name}</p>
                            <p className='font-semibold font-sans text-sm sm:text-[12px] md:text-lg lg:text-xl dark:text-slate-200'>{userData?.email}</p>
                        </div>
                    </div>
                    <div className='flex gap-14 pb-16'>
                        <button className='bg-[#1980e6] p-2 md:p-4 text-sm sm:text-[12px] md:text-lg lg:text-xl border-[1px] border-blue-500 hover:bg-transparent rounded-xl duration-500 font-sans font-semibold h-10 md:h-14 flex justify-center items-center shadow-md dark:hover:text-blue-500' onClick={handlefollowing}>{following}  Following</button>
                        <button className='hover:bg-[#1980e6] p-2 md:p-4 text-sm sm:text-[12px] md:text-lg lg:text-xl border-[1px] border-blue-500 bg-transparent rounded-xl duration-500 font-sans font-semibold h-10 md:h-14 flex justify-center items-center shadow-md dark:text-blue-500 dark:hover:text-black' onClick={handleFollower}>{follower} Follower</button>
                    </div>
                </div>
                {isVisible && (
                    <div className='border-[1px] rounded-xl mb-6 px-5 h-auto py-5 shadow-xl mx-auto w-auto'>
                        <span className='font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl dark:text-slate-200'>Follower</span>
                        {followersDetails.length <= 0 && (
                            <p className='justify-center text-center m-20 text-sm sm:text-[12px] md:text-lg lg:text-xl dark:text-slate-200'>You do not have any followers.......</p>
                        )}
                        {followersDetails.map((follower) => (
                            <div className='flex items-center mx-auto mt-5'>
                                <img src={userImage} alt="" className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full' />
                                <p key={follower.$id} className='ml-4 text-[12px] sm:text-lg md:text-xl lg:text-2xl font-semibold dark:text-slate-200'>{follower.Name}</p>
                            </div>
                        ))}
                    </div>
                )}
                <div>
                </div>
                {isVisibleFollow && (
                    <div className='border-[1px] rounded-xl mb-6 px-5 h-auto py-5 shadow-xl mx-auto'>
                        <span className='font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl dark:text-slate-200'>Following</span>
                        {followingDetails.length <= 0 && (
                            <p className='justify-center text-center m-20 text-sm sm:text-[12px] md:text-lg lg:text-xl dark:text-slate-200'>You are not following anyone......</p>
                        )}
                        {followingDetails.map((following) => (
                            <div className='flex items-center mx-auto mt-5'>
                                <img src={userImage} alt="" className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full' />
                                <p key={following.$id} className='ml-4 text-[12px] sm:text-lg md:text-xl lg:text-2xl font-semibold dark:text-slate-200'>{following.Name}</p>
                            </div>
                        ))}
                    </div>
                )}
                <div>
                    <button
                        className='text-sm sm:text-[12px] md:text-lg lg:text-xl bg-blue-500 hover:scla p-4 lg:p-8 rounded-xl font-semibold h-12 lg:h-16 flex justify-center items-center ml-5'>
                        {postCnt} post
                    </button>
                    {postCnt === 0 && (
                        <div className='my-48'>
                            <p className='text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans font-semibold dark:text-slate-200'>Start posting images on vibely</p>
                            <p className='text-center text-[12px] sm:text-lg md:text-xl lg:text-2xl font-sans dark:text-slate-200'>You not upload any post</p>
                        </div>
                    )}
                </div>
                <div class="grid grid-cols-4 md:grid-cols-5 gap-2 mx-10 sm:mx-16 h-auto mt-10">
                    {posts.length !== 0 && (posts.map((post) => {
                        const isAuthor = post && userData ? post.userId === userData?.$id : false;
                        return isAuthor ? (
                            <ProfilePost {...post} />
                        ) : null;
                    }))}
                </div>
            </div>
        </div>
    )
};

export default Profile;