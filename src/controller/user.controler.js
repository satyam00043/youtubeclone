import asyncHandler from '../utils/asyncHandler.js'
const registerUser=asyncHandler(async (req,res)=>{

    //get user details
    //validation/
    //check username and email if user already exist
    //ceck image and avatar;
    //upload on the cloudenary
    //save user details in database entry in details
    //    remove password and response fiels from response field
    //check for user creation  
    const userobj=[
        {userName:"satyam"}
    ]
    res.status(200).json({
        message:"real world projext"
    })

})

export default registerUser;