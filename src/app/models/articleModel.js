import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title:  String,
    description: String,
    image_url: String,
    views: Number,
    category: String
},{timestamps:true});

export default mongoose.model("Article", articleSchema);
