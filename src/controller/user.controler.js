// import asyncHandler from '../utils/asyncHandler.js'
// const registerUser=asyncHandler(async (req,res)=>{

//     //get user details
//     //validation/
//     //check username and email if user already exist
//     //ceck image and avatar;
//     //upload on the cloudenary
//     //save user details in database entry in details
//     //    remove password and response fiels from response field
//     //check for user creation  
//     const userobj=[
//         {userName:"satyam"}
//     ]
//     res.status(200).json({
//         message:"real world projext"
//     })

// })

// export default registerUser;
import { User } from './path/to/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Register a new user
export const registerUser = async (req, res) => {
  try {
    const { username, email, fullname, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    // Create a new user instance
    const user = new User({
      username,
      email,
      fullname,
      password,
    });

    // Hash the password
    user.password = await bcrypt.hash(password, 10);

    // Save the user
    const savedUser = await user.save();

    // Generate tokens
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    // Send response
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        fullname: savedUser.fullname,
        avatar: savedUser.avatar,
      },
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Other user-related controller functions can be added here
