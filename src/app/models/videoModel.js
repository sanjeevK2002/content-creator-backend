import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: String,
    description: String,
    video_url: String,
},{timestamps:true});

export default mongoose.model("Video", videoSchema);
