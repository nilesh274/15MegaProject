import React from 'react';
import appwriteService from '../appwrite/Config'
import { Link } from 'react-router-dom';

const ProfilePost = ({$id, title, featuredImage}) => {
    return(
        <div class="object-cover">
            <Link 
            to={`/post/${$id}`}
            >
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title} class="w-[110px] h-[90px] sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-fit"/>
            </Link>
        </div>
    )
}
export default ProfilePost;