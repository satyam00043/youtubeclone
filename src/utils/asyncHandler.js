 const asyncHandler=(requestHandeler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandeler(req,res,next))
        .catch((error)=>next(error))
    }
}
export default asyncHandler;


   /* //using try catch 
    const asyncHandelar=(fn)=async (req,res,next)=>{
        try{
            await fn(req,res,next);
        }catch(error){
            console.error(error);
            res.status(error.code||500).json({
                success:false,
                message:"Something went wrong"
            })
        }
    }*/

