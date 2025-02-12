import mongoose ,{Schema }from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema({
    videoFile:{
        type:String,
        require:true

    },
    thumbnails:{
        type:String,
        require:true

    },
    title:{
        type:String,
        require:true

    },
    description:{
        type:String,
        require:true

    },
    duration:{
        type:Number,
        require:true

    },
    views:{
        type:Number,
        default:0
    },
    ispublished:{
        type:Boolean,
        default:false
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
   

}, { timestamps: true });
videoSchema.plugins(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", videoSchema);
