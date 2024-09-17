const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteCollectionUsersId : String(import.meta.env.VITE_APPWRITE_COLLECTIONUSERS_ID),
    appwriteCollectionAuthUser : String(import.meta.env.VITE_APPWRITE_COLLECTIONAUTH_USER)
}

export default conf