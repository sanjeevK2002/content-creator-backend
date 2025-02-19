import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    views: Number,
    category: String
}, { timestamps: true });

export default mongoose.model("Article", articleSchema);
