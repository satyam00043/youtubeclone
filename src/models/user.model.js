
import mongoose from 'mongoose';
const userSchemaa=new Schema({
username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true
},
fullname:{
    type:String,
    required:true,
    trim:true,
    index:true
},
avatar:{
    type:String,
    default:"https://api.adorable.io/avatars/50/abott.png",
    required: true
},
coverImage:{
    type:String
},
watchHistory:[
    {
        type:Schema.Types.ObjectId,
        ref:"Video"
    }
],
password:{
    type:String,
    required:[true,"password is required"],
    minlength:8
},refreshToken:{
    type:String
}

},{timestamps:true})

userSchemaa.pre("save", async function(next){
    // const user=this;
    // if(user.isModified("password")){
    //     user.password=await bcrypt.hash(user.password,10)
    // }
    // next()
    if(!this.isModified("password")) return next();
    this.password=bcrypt.hash(this.password,10);
    next();

})
userSchemaa.method.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
 
}
userSchemaa.methods.generateAccessToken=function(){
    return jwt.sign(
        {
            _id:this._id,
            username:this.username,
            email:this.email,
            fullname:this.fullname,
        
        }
        ,process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
}
userSchemaa.methods.generateRefreshToken=function(){
    return jwt.sign(
        {
            _id:this._id,
           
        
        }
        ,process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:process.env.REFRESH_TOKEN_EXPIRY})

}


export const User=mongoose.model("User",userSchemaa)