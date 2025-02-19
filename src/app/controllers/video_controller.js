import Video from "../models/video_model.js";
import cloudinary from "../../config/cloudinary_config.js";
import fs from "fs";

export const uploadVideo = async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ message: "No video uploaded" });

        const result = await cloudinary.uploader.upload(req.file.path, { resource_type: "video" });
        fs.unlinkSync(req.file.path); // Delete file after upload

        const body = new Video({
            title: req.body.title,
            description: req.body.description,
            video_url: result.secure_url,
        });

        const video = await Video.create(body)
        res.status(201).json(video);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
