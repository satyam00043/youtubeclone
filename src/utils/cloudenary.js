import { v2 as cloudinary } from "cloudinary";
import {fs} from "fs";
cloudinary.confing({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const uploadOnClodinary=async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        const response=await cloudinary.uploader.upload(
            localFilePath,
            {
                resource_type: "auto",
                // folder: 'user_profile_images',
                // transformation: {
                //     width: 200,
                //     height: 200,
                //     crop: 'fill'
                // }
            }
        )
        console.log("file is  uploded on cloudenary ",response.url);
        return response.url;

    }
    catch(error){
        fs.unlinkSync(localFilePath);//remove the locally saved temporary file as the upload file got failed
        return null;

    }
}

export default uploadOnClodinary;